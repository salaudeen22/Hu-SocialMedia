const mongoose = require("mongoose");

const Postschema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },

  timeStamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});
const Postmodel = mongoose.model("PostModel", Postschema);

module.exports = Postmodel;
