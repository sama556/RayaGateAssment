import React from 'react';
import {  PencilSquareIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import b1 from'../assets/boy1.png'
import b2 from'../assets/boy2.png'
import b3 from'../assets/boy3.png'
import b4 from'../assets/boy4.png'
import b5 from'../assets/boy5.png'
import g2 from'../assets/girl2.png'

function RightAside() {
  return (
    <div className=" bg-white shadow-lg rounded-lg p-4 mt-2">
      {/* First Row: Message and Post Icons */}
      <div className="flex justify-between space-x-4 mb-4">
    <p className='text-gray-700 font-semibold'>Massage</p>
        <PencilSquareIcon className="h-6 w-6 text-gray-700" aria-hidden="true" />
      </div>

      {/* Search Bar */}
      <div className="relative">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-600 absolute left-3 top-2" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-3 py-2 border  text-gray-600 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex space-x-4">
          <p className= "text-gray-900 font-semibold text-messages">Primary</p>
          <p className="text-gray-400 font-semibold">General</p>
        </div>
        <p className="text-blue-600 font-semibold">Request(4)</p>
     
    </div>
  <hr className='mt-1'></hr>
  <div className="flex items-center mt-2">
  <img
    className="h-7 w-7 rounded-full"
    src={b1}
    alt="Profile"
  />
  <p className="ml-4 text-gray-700 ">John Doe</p>
</div>
<div className="flex items-center mt-2">
  <img
    className="h-7 w-7 rounded-full"
    src={b2}
    alt="Profile"
  />
  <p className="ml-4 text-gray-700 ">Ahmed Adel</p>
</div>
<div className="flex items-center mt-2">
  <img
    className="h-7 w-7 rounded-full"
    src={g2}
    alt="Profile"
  />
  <p className="ml-4 text-gray-700 ">Sara Joo</p>
</div>
<div className="flex items-center mt-2">
  <img
    className="h-7 w-7 rounded-full"
    src={b4}
    alt="Profile"
  />
  <p className="ml-4 text-gray-700 ">Ali Doe</p>
</div>

<div className="flex items-center mt-2">
<img
  className="h-7 w-7 rounded-full"
  src={b5}
  alt="Profile"
/>
<p className="ml-4 text-gray-700 ">Koko Doe</p>
</div>
<div className="flex items-center mt-2">
<img
  className="h-7 w-7 rounded-full"
  src={b3}
  alt="Profile"
/>
<p className="ml-4 text-gray-700 ">Samy Ali</p>
</div>
<span className='text-gray-500 text-sm mt-1'>View All</span>
    </div>
  );
}

export default RightAside;
