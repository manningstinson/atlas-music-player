import React from 'react';
import { PlayListItemProps } from '../types/types';

const PlayListItem: React.FC<PlayListItemProps> = ({ song, isActive, onClick, className }) => {
  return (
    <div
      className={`rounded-sm cursor-pointer p-2 ${
        isActive
          ? 'currently-playing'
          : 'bg-[#fafafa] hover:bg-gray-200'
      } ${className ?? ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <div className="flex-1">
          <div
            className={`playlist-title font-size: 0.8rem font-weight: bold ${isActive ? 'playlist-title-selected' : ''}`}
          >
            {song.title}
          </div>
          <div
            className={`playlist-artist font-size: 0.8rem font-weight: bold ${isActive ? 'playlist-artist-selected' : ''}`}
          >
            {song.artist}
          </div>
        </div>
        <div
          className={`playlist-title ${isActive ? 'playlist-title-selected' : ''}`}
        >
          {Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default PlayListItem;