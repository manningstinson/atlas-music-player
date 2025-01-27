import React from 'react';
import { PlayListItemProps } from '../types/types';

const PlayListItem: React.FC<PlayListItemProps> = ({ song, isActive, onClick, className }) => {
  return (
    <div
      className={` rounded-lg cursor-pointer ${
        isActive ? 'currently-playing' : 'bg-[#FAFAFA] hover:bg-gray-100'
      } ${className ?? ''}`}
      onClick={onClick}
    >
      <div className="flex justify-between">
        <div className="flex-1">
          <div className={isActive ? 'playlist-title-selected' : 'playlist-title'}>
            {song.title}
          </div>
          <div className={isActive ? 'playlist-artist-selected' : 'playlist-artist'}>
            {song.artist}
          </div>
        </div>
        <div className={isActive ? 'playlist-title-selected' : 'playlist-title'}>
          {Math.floor(song.duration / 60)}:{String(song.duration % 60).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default PlayListItem;