// src/types/types.tsx
// Updated to match API response format
export interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  cover: string;
  song: string;
 }

export interface SongTitleProps {
  currentSong?: Song;
}

export interface Playlist {
  id: string;
  name: string;
  songs: Song[];
}

export interface PlayerState {
  currentSong: Song;
  isPlaying: boolean;
  volume: number; // 0 to 1
  playbackSpeed: 0.5 | 1 | 2;
  isShuffle: boolean;
}

// Props interfaces
export interface CoverArtProps {
  currentSong: Song | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface CurrentlyPlayingProps {
  currentSong: Song | null;
}

export interface PlayControlsProps {
  currentSong: Song | null;
  playlist: Playlist;
  isPlaying: boolean;
  isShuffle: boolean;
  playbackSpeed: 0.5 | 1 | 2;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onShuffleToggle: () => void;
  onSpeedChange: () => void;
}

export interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (volume: number) => void;
}


export interface PlayListProps {

   playlist: {
    songs: Song[];
  };
  currentSong?: Song | null;
  onSongSelect: (song: Song) => void;
  className?: string;
}


export interface PlayListItemProps {

 song: Song;
  isActive: boolean;
  onClick: () => void;
  className?: string;

}


export interface AudioPlayerProps {
  currentSong: Song | null;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: 0.5 | 1 | 2;
  onEnded: () => void;
  onError: (error: Error) => void;
}


export interface CoverArtProps {
  currentSong: Song | null;
}