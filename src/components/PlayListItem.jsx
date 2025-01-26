import React from 'react';

const PlayListItem = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
      <div className="flex-1 truncate">
        <div className="text-sm font-bold truncate text-black-800">
          Electric Fever
        </div>
        <div className="text-xs truncate text-gray-600">
          Neon Jungle
        </div>
      </div>
      <div className="text-xs ml-4 text-black-600">
        3:25
      </div>
    </div>
  );
};

export default PlayListItem;