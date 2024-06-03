import React from 'react';
import { HomeIcon, UserGroupIcon, PencilSquareIcon, ShoppingCartIcon, PhotoIcon } from '@heroicons/react/24/outline';
import logo from'../assets/logo.svg'
function Aside() {
  return (
    <aside className="bg-white shadow-lg rounded-lg p-4 mt-2">
      <nav className="space-y-4">
       
       
          <div className="flex items-center text-white font-semibold bg-blue-500 rounded-lg">
            <HomeIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <span>Home</span>
          </div>
        
            <div className="flex items-center text-gray-700 ">
              <UserGroupIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              <span>Friends</span>
            </div>
            <div className="flex items-center text-gray-700 ">
              <PencilSquareIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              <span>Posts</span>
            </div>
        
      

        {/* Photos Section */}
        <div className="flex items-center text-gray-700  hover:text-gray-900">
          <PhotoIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          <span>Photos</span>
        </div>

        {/* Marketplace Section */}
        <div className="flex items-center text-gray-700  hover:text-gray-900">
          <ShoppingCartIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          <span>Marketplace</span>
        </div>
      </nav>
      <hr className='m-3'></hr>
      <div className='space-y-4'>
      <span className='text-gray-500  text-sm'>Pages You Likes</span>
      <div className="flex items-center text-gray-700  hover:text-gray-900">
      <img src={logo} className="h-5 w-5 mr-2" aria-hidden="true" />
      <span>UI/UX Community</span>
    </div>
    <div className="flex items-center text-gray-700  hover:text-gray-900">
    <img src={logo} className="h-5 w-5 mr-2" aria-hidden="true" />
    <span>Behance</span>
  </div>
  <div className="flex items-center text-gray-700  hover:text-gray-900">
      <img src={logo} className="h-5 w-5 mr-2" aria-hidden="true" />
      <span>Programing</span>
    </div>
    <div className="flex items-center text-gray-700  hover:text-gray-900">
      <img src={logo} className="h-5 w-5 mr-2" aria-hidden="true" />
      <span>Web Desginer</span>
    </div>
      </div>
    </aside>
  );
}

export default Aside;
