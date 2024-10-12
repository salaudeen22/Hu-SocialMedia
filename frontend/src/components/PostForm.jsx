import React, { useState } from 'react';
import Swal from 'sweetalert2';
function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: null,
  });

 
  const handleChange = (e) => {
    const { name, type, files, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value, 
    });
  };

  const email = localStorage.getItem("email");

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    if (!email) {
      console.error('No email found in local storage');
      return;
    }

    const data = new FormData();
    data.append('email', email);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('PostImage', formData.imageUrl); 

    try {
      const response = await fetch('http://localhost:5555/api/postContent', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();
      console.log('Response:', result);
      Swal.fire({
        title: "Post Sucessfull!",
        
        icon: "success"
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error}`,
        
      });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter post title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter post description"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            name="imageUrl"
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
            accept=".jpg, .jpeg, .png" 
          />
        </div>
      
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default PostForm;
