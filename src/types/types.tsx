// src/types/types.ts

export interface Song {
  id: string;
  title: string;
  artist: string;
  duration: number; // in seconds
  coverArt: string;
  audioUrl: string;
  lyrics?: string;
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

// Props interfaces for each component
export interface CoverArtProps {
  currentSong: Song | null;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface SongTitleProps {
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

export interface PlayListItemProps {
  song: Song;
  isActive: boolean;
  onClick: () => void;
}