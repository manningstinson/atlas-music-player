import React from 'react';

const CurrentlyPlaying = () => {
  return (
    <div className="flex items-center justify-between py-2 border border-gray-500 p-3 rounded-lg">
      <div className="flex-1 truncate ">
        <div className=" text-3xl font-bold truncate text-gray-900 ">
          Painted in Blue
        </div>
        <div className="text-2xl truncate text-gray-500">
          Soul Canvas
        </div>
      </div>
      <div className="text-xl ml-4 text-gray-500">
        5:55
      </div>
    </div>
  );
};

export default CurrentlyPlaying;