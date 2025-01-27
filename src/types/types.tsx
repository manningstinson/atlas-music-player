// src/types/types.tsx
export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number; // in seconds
  coverArt: string;
  audioUrl: string;
  lyrics?: string;
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
  currentSong: Song | null;
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
  playlist: Playlist;
  currentSong: Song | null;
  onSongSelect: (song: Song) => void;
}


export interface PlayListItemProps {

  song: {

    title: string;
    artist: string;
    duration: number;

  };

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


