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
  duration: 0,
  coverArt: '/default-cover.jpg',
  audioUrl: '',
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
        
        if (!Array.isArray(songsData)) {
          throw new Error('Expected an array of songs');
        }

        // Transform the songs data to include audio URLs
        const processedSongs: Song[] = songsData.map(song => ({
          ...song,
          coverArt: `/covers/${song.id}.jpg`,
          audioUrl: `/audio/${song.id}.mp3`,
        }));

        const newPlaylist: Playlist = {
          id: "default",
          name: "My Playlist",
          songs: processedSongs,
        };

        setPlaylist(newPlaylist);
        
        if (processedSongs.length > 0) {
          setPlayerState(prev => ({
            ...prev,
            currentSong: processedSongs[0],
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
    setPlayerState(prev => ({
      ...prev,
      playbackSpeed: prev.playbackSpeed === 2 ? 0.5 : 
                    prev.playbackSpeed === 1 ? 2 : 1
    }));
  };

  const handleVolumeChange = (newVolume: number): void => {
    setPlayerState(prev => ({
      ...prev,
      volume: newVolume
    }));
  };

  const handleSongSelect = (song: Song): void => {
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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <AudioPlayer
        currentSong={playerState.currentSong}
        isPlaying={playerState.isPlaying}
        volume={playerState.volume}
        playbackSpeed={playerState.playbackSpeed}
        onEnded={handleAudioEnded}
        onError={handleAudioError}
      />
      
      {/* Large Screen Layout */}
      <div className="hidden lg:flex justify-between max-w-3xl mx-auto">
        <div className="w-96 flex flex-col bg-white dark:bg-gray-800">
          <CoverArt currentSong={playerState.currentSong} />
          <div className="px-1">
            <CurrentlyPlaying currentSong={playerState.currentSong} />
            <div className="mt-1">
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
        </div>
        <div className="w-96 bg-white dark:bg-gray-800">
          <PlayList
            playlist={playlist}
            currentSong={playerState.currentSong}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden flex flex-col max-w-sm mx-auto">
        <div className="flex flex-col bg-white dark:bg-gray-800">
          <CoverArt currentSong={playerState.currentSong} />
          <div className="px-1">
            <CurrentlyPlaying currentSong={playerState.currentSong} />
            <div className="mt-1">
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
        </div>
        <div className="bg-white dark:bg-gray-800">
          <PlayList
            playlist={playlist}
            currentSong={playerState.currentSong}
            onSongSelect={handleSongSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;