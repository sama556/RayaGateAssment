import React from 'react';
import { PhotoIcon, LinkIcon, VideoCameraIcon, HashtagIcon, AtSymbolIcon } from '@heroicons/react/24/outline';
import girl from '../assets/girl1.png';
function PostComposer() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
    
      <div className="flex items-center mb-4">
        <img
          className="h-8 w-8 rounded-full mr-4 border border-blue-400"
          src={girl}
          alt="Profile"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="flex-grow border border-gray-300 rounded-full text-sm py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-4 bg-sky-200 text-sky-900 text-xs font-semibold rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Share Post
        </button>
      </div>


      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <div className="flex space-x-4 text-gray-700 text-xs">
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <PhotoIcon className="h-4 w-4 text-red-700" />
            <span>Image/Video</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <LinkIcon className="h-4 w-4 text-blue-600" />
            <span>Attachment</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <VideoCameraIcon className="h-4 w-4 text-green-600" />
            <span>Live</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <HashtagIcon className="h-4 w-4 text-purple-800" />
            <span>Hashtag</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-500">
            <AtSymbolIcon className="h-4 w-4 text-orange-500" />
            <span>Mention</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default PostComposer;
