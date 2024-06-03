import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <Link to={`/posts/${post.id}`}>
        <h3 className="text-lg text-sky-950 font-semibold">{post.title}</h3>
        <p className="text-gray-600 mt-2">{post.body}</p>
        <button className="text-blue-500 mt-2">Read More</button>
      </Link>
    </div>
  );
};

export default PostItem;
