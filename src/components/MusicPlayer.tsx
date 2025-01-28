import { useEffect, useState, useCallback } from 'react';
import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import CurrentlyPlaying from './CurrentlyPlaying';
import PlayList from './PlayList';
import AudioPlayer from './AudioPlayer';
import LoadingSkeleton from './LoadingSkeleton';
import { PlayerState, Playlist, Song } from '../types/types';

const DEFAULT_SONG: Song = {
  id: '',
  title: '',
  artist: '',
  genre: '',
  duration: 0,
  cover: '',
  song: ''
};

const MusicPlayer: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [playlist, setPlaylist] = useState<Playlist>({
    id: "default",
    name: "My Playlist",
    songs: [],
  });

  const [playerState, setPlayerState] = useState<PlayerState>({
    currentSong: DEFAULT_SONG,
    isPlaying: false,
    volume: 0.7,
    playbackSpeed: 1,
    isShuffle: false
  });

  useEffect(() => {
    const fetchPlaylistData = async (): Promise<void> => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/v1/playlist');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const songsData = await response.json();
        console.log('Fetched songs data (detailed):', JSON.stringify(songsData[0], null, 2));
        
        if (!Array.isArray(songsData)) {
          throw new Error('Expected an array of songs');
        }

        const newPlaylist: Playlist = {
          id: "default",
          name: "My Playlist",
          songs: songsData,
        };

        setPlaylist(newPlaylist);
        
        if (songsData.length > 0) {
          console.log('Setting initial song (detailed):', JSON.stringify(songsData[0], null, 2));
          setPlayerState(prev => ({
            ...prev,
            currentSong: songsData[0],
          }));
        }
      } catch (error) {
        console.error('Detailed error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaylistData();
  }, []);

  const handlePlayPause = (): void => {
    setPlayerState(prev => ({
      ...prev,
      isPlaying: !prev.isPlaying
    }));
  };

  const handleNext = useCallback((): void => {
    if (!playlist?.songs?.length) return;

    const currentIndex = playlist.songs.findIndex(
      song => song.id === playerState.currentSong.id
    );
    
    const nextIndex = playerState.isShuffle 
      ? Math.floor(Math.random() * playlist.songs.length)
      : (currentIndex + 1) % playlist.songs.length;
    
    setPlayerState(prev => ({
      ...prev,
      currentSong: playlist.songs[nextIndex],
      isPlaying: true
    }));
  }, [playlist.songs, playerState.currentSong.id, playerState.isShuffle]);

  const handlePrevious = (): void => {
    if (!playlist?.songs?.length) return;

    const currentIndex = playlist.songs.findIndex(
      song => song.id === playerState.currentSong.id
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

  const handleShuffleToggle = (): void => {
    setPlayerState(prev => ({
      ...prev,
      isShuffle: !prev.isShuffle
    }));
  };

  const handleSpeedChange = (): void => {
    const nextSpeed: 0.5 | 1 | 2 = 
      playerState.playbackSpeed === 2 ? 0.5 : 
      playerState.playbackSpeed === 1 ? 2 : 1;

    setPlayerState(prev => ({
      ...prev,
      playbackSpeed: nextSpeed
    }));
  };

  const handleVolumeChange = (newVolume: number): void => {
    setPlayerState(prev => ({
      ...prev,
      volume: newVolume
    }));
  };

  const handleSongSelect = (song: Song): void => {
    console.log('Selected song (detailed):', JSON.stringify(song, null, 2));
    setPlayerState(prev => ({
      ...prev,
      currentSong: song,
      isPlaying: true
    }));
  };

  const handleAudioError = (error: Error): void => {
    console.error(`Audio playback error:`, error);
    setError(`Audio playback error: ${error.message}`);
    setPlayerState(prev => ({
      ...prev,
      isPlaying: false
    }));
  };

  const handleAudioEnded = useCallback(() => {
    handleNext();
  }, [handleNext]);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center p-2">
          <h2 className="text-xl font-semibold text-red-600 mb-1">Error</h2>
          <p className="text-gray-700 dark:text-gray-300">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  console.log('Current Song before null check:', JSON.stringify(playerState.currentSong, null, 2));
  const currentSongOrNull = playerState.currentSong?.id ? playerState.currentSong : null;
  console.log('Current Song after null check:', JSON.stringify(currentSongOrNull, null, 2));

  return (
    <div className="">
      <AudioPlayer
        currentSong={currentSongOrNull}
        isPlaying={playerState.isPlaying}
        volume={playerState.volume}
        playbackSpeed={playerState.playbackSpeed}
        onEnded={handleAudioEnded}
        onError={handleAudioError}
      />
      
      {/* Large Screen Layout */}
      <div className="hidden lg:flex justify-between max-w-4xl mx-auto">
        <div className="max-w-xl flex flex-col gap-4 bg-white">
          <CoverArt currentSong={currentSongOrNull} />
          <div className="px-1">
            <CurrentlyPlaying currentSong={currentSongOrNull} />
            <div className="max-w-xl px-2">
              <PlayControls
                currentSong={currentSongOrNull}
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
        </div>
        <div className="w-135 bg-white dark:bg-[#464659]">
          <PlayList
            playlist={playlist}
            currentSong={currentSongOrNull}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden flex flex-col max-w-sm mx-auto">
        <div className="flex flex-col">
          <CoverArt currentSong={currentSongOrNull} />
          <div className="px-1">
            <CurrentlyPlaying currentSong={currentSongOrNull} />
            <div className="mt-1">
              <PlayControls
                currentSong={currentSongOrNull}
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
        </div>
        <div className="">
          <PlayList
            playlist={playlist}
            currentSong={currentSongOrNull}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;