import React from 'react';
import PlayListItem from './PlayListItem';

const Playlist = () => {
  const songs = [
    { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', length: '5:55', isSelected: true },
    { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', length: '8:02', isSelected: false },
    { id: 3, title: 'Fading Shadows', artist: 'The Emberlight', length: '3:01', isSelected: false },
    { id: 4, title: 'Cosmic Drift', artist: 'Solar Flare', length: '5:01', isSelected: false },
  ];

  return (
    <div className="space-y-2">
      {songs.map((song) => (
        <PlayListItem
          key={song.id}
          title={song.title}
          artist={song.artist}
          length={song.length}
          isSelected={song.isSelected}
        />
      ))}
    </div>
  );
};

export default Playlist;