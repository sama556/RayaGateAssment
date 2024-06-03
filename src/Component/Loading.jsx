import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
  return (
    <div className=" h-screen  flex items-center justify-center bg-slate-300">
      <FaSpinner className="animate-spin text-4xl text-sky-600" />
    </div>
  );
};

export default Loading;
