import React from 'react';

function DisplayAllPost({ posts }) {
  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">All Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="mb-6 border rounded-md shadow-md overflow-hidden">
          <div className="flex items-center p-4">
            <img
              src="https://via.placeholder.com/40" // Placeholder for user profile image
              alt={post.user.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <h2 className="text-sm font-semibold text-gray-800">{post.user.name}</h2>
          </div>

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          )}

          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayAllPost;
