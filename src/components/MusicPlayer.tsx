import { useEffect, useState } from 'react';
import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import CurrentlyPlaying from './CurrentlyPlaying';
import PlayList from './PlayList';
import AudioPlayer from './AudioPlayer';
import LoadingSkeleton from './LoadingSkeleton';
import { PlayerState, Playlist, Song } from '../types/types';

const MusicPlayer = () => {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [playlist] = useState<Playlist>({
    id: "1",
    name: "Default Playlist",
    songs: [
      { id: "1", title: 'Painted in Blue', artist: 'Soul Canvas', duration: 355, coverArt: "", audioUrl: "" },
      { id: "2", title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: 482, coverArt: "", audioUrl: "" },
      { id: "3", title: 'Fading Shadows', artist: 'The Emberlight', duration: 181, coverArt: "", audioUrl: "" },
      { id: "4", title: 'Cosmic Drift', artist: 'Solar Flare', duration: 301, coverArt: "", audioUrl: "" },
      { id: "5", title: 'Urban Serenade', artist: 'Midnight Groove', duration: 294, coverArt: "", audioUrl: "" },
      { id: "6", title: 'Whispers in the Wind', artist: 'Rust & Ruin', duration: 373, coverArt: "", audioUrl: "" },
      { id: "7", title: 'Electric Fever', artist: 'Neon Jungle', duration: 521, coverArt: "", audioUrl: "" },
      { id: "8", title: 'Edge of the Abyss', artist: 'Steel Horizon', duration: 147, coverArt: "", audioUrl: "" },
      { id: "9", title: 'Golden Haze', artist: 'Velvet Waves', duration: 195, coverArt: "", audioUrl: "" },
      { id: "10", title: 'Shatter the Silence', artist: 'Thunderclap Echo', duration: 502, coverArt: "", audioUrl: "" }
    ]
  });

  const [playerState, setPlayerState] = useState<PlayerState>({
    currentSong: null,
    isPlaying: false,
    volume: 0.7,
    playbackSpeed: 1,
    isShuffle: false
  });

  // Effects
  useEffect(() => {
    const initializePlayer = () => {
      if (playlist.songs.length > 0) {
        setPlayerState(prev => ({
          ...prev,
          currentSong: playlist.songs[0]
        }));
      }
      setIsLoading(false);
    };

    initializePlayer();
  }, []);

  // Handlers
  const handlePlayPause = () => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying
    }));
  };

  const handleNext = () => {
    if (!playerState.currentSong || !playlist.songs.length) return;
    
    const currentIndex = playlist.songs.findIndex(
      song => song.id === playerState.currentSong?.id
    );
    
    const nextIndex = playerState.isShuffle 
      ? Math.floor(Math.random() * playlist.songs.length)
      : (currentIndex + 1) % playlist.songs.length;
    
    setPlayerState(prev => ({
      ...prev,
      currentSong: playlist.songs[nextIndex],
      isPlaying: true
    }));
  };

  const handlePrevious = () => {
    if (!playerState.currentSong || !playlist.songs.length) return;
    
    const currentIndex = playlist.songs.findIndex(
      song => song.id === playerState.currentSong?.id
    );
    
    const prevIndex = currentIndex === 0 
      ? playlist.songs.length - 1 
      : currentIndex - 1;
    
    setPlayerState(prev => ({
      ...prev,
      currentSong: playlist.songs[prevIndex],
      isPlaying: true
    }));
  };

  const handleShuffleToggle = () => {
    setPlayerState(prev => ({
      ...prev,
      isShuffle: !prev.isShuffle
    }));
  };

  const handleSpeedChange = () => {
    setPlayerState(prev => ({
      ...prev,
      playbackSpeed: prev.playbackSpeed === 2 ? 0.5 : 
                    prev.playbackSpeed === 1 ? 2 : 1
    }));
  };

  const handleVolumeChange = (newVolume: number) => {
    setPlayerState(prev => ({
      ...prev,
      volume: newVolume
    }));
  };

  const handleSongSelect = (song: Song) => {
    setPlayerState(prev => ({
      ...prev,
      currentSong: song,
      isPlaying: true
    }));
  };

  const handleAudioError = (error: Error) => {
    console.error(`Audio playback error: ${error.message}`);
  };
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-white ">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex justify-between max-w-[var(--width-player-large)] mx-auto">
        {/* Left Column */}
        <div className="max-w-[var(--width-player-small)] flex flex-col gap-4 bg-white dark:bg-[#464659]">
          <CoverArt currentSong={playerState.currentSong} />
          <CurrentlyPlaying currentSong={playerState.currentSong} />
          <div className="max-w-xl px-2">
            <PlayControls
              currentSong={playerState.currentSong}
              playlist={playlist}
              isPlaying={playerState.isPlaying}
              isShuffle={playerState.isShuffle}
              playbackSpeed={playerState.playbackSpeed}
              onPlayPause={handlePlayPause}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onShuffleToggle={handleShuffleToggle}
              onSpeedChange={handleSpeedChange}
            />
            <VolumeControls
              volume={playerState.volume}
              onVolumeChange={handleVolumeChange}
            />
          </div>
        </div>
        {/* Right Column */}
        <div className="w-[var(--width-player-small)] playlist-bg dark:bg-[#464659]">
          <PlayList
            playlist={playlist}
            currentSong={playerState.currentSong}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden flex flex-col gap-4 max-w-[var(--width-player-small)] mx-auto">
        <div className="flex flex-col gap-4 bg-white dark:bg-[#464659]">
          <CoverArt currentSong={playerState.currentSong} />
          <CurrentlyPlaying currentSong={playerState.currentSong} />
          <div className="px-2">
            <PlayControls
              currentSong={playerState.currentSong}
              playlist={playlist}
              isPlaying={playerState.isPlaying}
              isShuffle={playerState.isShuffle}
              playbackSpeed={playerState.playbackSpeed}
              onPlayPause={handlePlayPause}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onShuffleToggle={handleShuffleToggle}
              onSpeedChange={handleSpeedChange}
            />
            <VolumeControls
              volume={playerState.volume}
              onVolumeChange={handleVolumeChange}
            />
          </div>
        </div>
        <div className="playlist-bg dark:bg-[#464659]">
          <PlayList
            playlist={playlist}
            currentSong={playerState.currentSong}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>

      <AudioPlayer
        currentSong={playerState.currentSong}
        isPlaying={playerState.isPlaying}
        volume={playerState.volume}
        playbackSpeed={playerState.playbackSpeed}
        onEnded={handleNext}
        onError={handleAudioError}
      />
    </div>
  );
};

export default MusicPlayer;