const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const UserModel = require("../Model/UserSchema");
const PostModel = require("../Model/Postschema");
const uploadOnCloudinary = require("../utils/cloudinary");
const fs = require('fs');

router.post("/postContent", upload.single("PostImage"), async (req, res) => {
  try {
    const { email, title, description } = req.body;

    if (!email || !description || !title) {
      return res.status(400).json({ error: "Email, title, and description are required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let postImage = null;
    if (req.file) {
      const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
      if (!cloudinaryResponse) {
        return res.status(500).json({ error: "Failed to upload image" });
      }
      postImage = cloudinaryResponse.url;

      // Delete temporary file
      fs.unlink(req.file.path, (err) => {
        if (err) {
          console.error("Error deleting temporary file:", err);
        }
      });
    }

    const newPost = await PostModel.create({
      user: user._id,
      title,
      description,
      imageUrl: postImage,
    });

    user.posts.push(newPost._id);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Post created successfully",
      post: newPost,
    });
  } catch (error) {
    console.error("Error creating post:", error.message); 
    res.status(500).json({ error: "An error occurred while creating the post", details: error.message });
  }
});


router.get("/posts", async (req, res) => {
  try {
    const posts = await PostModel.find().populate('user', 'name');
    res.status(200).json({
      success: true,
      posts,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "An error occurred while fetching posts" });
  }
});

module.exports = router;
