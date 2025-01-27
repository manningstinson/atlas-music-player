import React from 'react';
import { PlayListProps } from '../types/types';
import PlayListItem from './PlayListItem';

const Playlist: React.FC<PlayListProps> = ({ playlist, currentSong, onSongSelect, className }) => {
  return (
    <div className={`pl-6 ${className ?? ''}`}>
      <div className="text-xl font-bold mb-1.5 ml-3 playlist-title">Playlist</div>
      <div className="space-y-2 p-4 rounded-lg">
        {playlist.songs.map((song) => (
          <PlayListItem
            key={song.id}
            song={song}
            isActive={currentSong?.id === song.id}
            onClick={() => onSongSelect(song)}
            className={`${currentSong?.id === song.id ? 'currently-playing' : ''} ${currentSong?.id === song.id ? 'currently-playing-text' : 'playlist-artist'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;