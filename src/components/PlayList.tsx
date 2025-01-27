import PlayListItem from './PlayListItem';

const Playlist = () => {
  const songs = [
 { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', length: '5:55', isSelected: true },
 { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', length: '8:02', isSelected: false },
 { id: 3, title: 'Fading Shadows', artist: 'The Emberlight', length: '3:01', isSelected: false },
 { id: 4, title: 'Cosmic Drift', artist: 'Solar Flare', length: '5:01', isSelected: false },
 { id: 5, title: 'Urban Serenade', artist: 'Midnight Groove', length: '4:54', isSelected: false },
 { id: 6, title: 'Whispers in the Wind', artist: 'Rust & Ruin', length: '6:13', isSelected: false },
 { id: 7, title: 'Electric Fever', artist: 'Neon Jungle', length: '8:41', isSelected: false },
 { id: 8, title: 'Edge of the Abyss', artist: 'Steel Horizon', length: '2:27', isSelected: false },
 { id: 9, title: 'Golden Haze', artist: 'Velvet Waves', length: '3:15', isSelected: false },
 { id: 10, title: 'Shatter the Silence', artist: 'Thunderclap Echo', length: '8:22', isSelected: false }
];

  return (
    <div>
      <div className="text-2xl font-bold mb-4">Playlist</div>
      <div className="space-y-2 rounded-">
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
    </div>
  );
};

export default Playlist;