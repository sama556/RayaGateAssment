import React from 'react';
import girl from'../assets/girl1.png';

export default function Card() {
  return (
    <div className="bg-white shadow rounded-lg p-4 max-w-sm mx-auto">
      <div className="bg-slate-50 p-1 rounded-lg">
        <div className="flex items-start">
          <img
            className="h-10 w-10 rounded-full"
            src={girl}
            alt="Profile"
          />
          <div className="ml-4">
            <p className="text-base font-medium text-sky-900">Sama Ahmed</p>
            <span className='text-xs font-light text-gray-600 top-0'>@sama112</span>
          </div>
        </div>
        <div className=' flex items-start mt-2'>
        <div className="ml-4"><p className='text-sky-900 font-bold text-base'>2.3k</p>
        <span className='text-gray-600 text-xs font-light gap-0'>follower</span>
        </div>
        <div className="ml-4"><p className='text-sky-900 font-bold text-base'>300</p>
        <span className='text-gray-600 text-xs font-light gap-0'>following</span>
        </div>
        <div className="ml-4"><p className='text-sky-900 font-bold text-base'>80</p>
        <span className='text-gray-600 text-xs font-light gap-0'>post</span>
        </div>
       
        </div>
      </div>
    </div>
  );
}
