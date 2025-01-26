import React from 'react';

const PlayListItem = ({ 
  title, 
  artist, 
  length, 
  isSelected = false 
}) => {
  return (
    <div 
      className={`
        flex items-center justify-between px-4 py-2 rounded-lg 
        ${isSelected ? 'bg-blue-100' : 'bg-gray-100'}
      `}
    >
      <div className="flex-1 truncate">
        <div className={`
          text-sm font-bold truncate 
          ${isSelected ? 'text-blue-800' : 'text-black-800'}
        `}>
          {title}
        </div>
        <div className="text-xs truncate text-gray-700">
          {artist}
        </div>
      </div>
      <div className="text-xs ml-4 font-bold text-black-600 flex justify-end">
        {length}
      </div>
    </div>
  );
};

export default PlayListItem;