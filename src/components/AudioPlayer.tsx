import { useEffect, useRef } from 'react';
import { AudioPlayerProps } from '../types/types';

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  currentSong,
  isPlaying,
  volume,
  playbackSpeed,
  onEnded,
  onError
}) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    const loadAudio = async () => {
      if (!currentSong?.song) return;

      try {
        // Fetch the audio file first
        const response = await fetch(currentSong.song);
        const blob = await response.blob();
        
        // Create object URL from blob
        const audioUrl = URL.createObjectURL(blob);
        
        const audio = audioRef.current;
        audio.src = audioUrl;
        
        // Set properties
        audio.volume = volume;
        audio.playbackRate = playbackSpeed;

        // Load the audio
        await audio.load();
        
        if (isPlaying) {
          try {
            await audio.play();
          } catch (error) {
            console.error('Play error:', error);
            onError(error instanceof Error ? error : new Error('Play failed'));
          }
        }

        // Cleanup old object URL when source changes
        return () => {
          URL.revokeObjectURL(audioUrl);
        };
      } catch (error) {
        console.error('Audio loading error:', error);
        onError(error instanceof Error ? error : new Error('Failed to load audio'));
      }
    };

    loadAudio();
  }, [currentSong, isPlaying, volume, playbackSpeed, onError]);

  // Handle ended event
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, [onEnded]);

  return null;
};

export default AudioPlayer;