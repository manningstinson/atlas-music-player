import React from 'react';
import { PlayListProps } from '../types/types';
import PlayListItem from './PlayListItem';

const Playlist: React.FC<PlayListProps> = ({ playlist, currentSong, onSongSelect, className }) => {
  return (
    <div className={`p-4 ${className ?? ''}`}>
      <div className="text-2xl font-bold mb-4 playlist-title">Playlist</div>
      <div className="space-y-2 bg-[#FAFAFA] p-4 rounded-">
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