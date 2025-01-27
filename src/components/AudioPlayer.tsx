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
    const audio = audioRef.current;
    
    if (currentSong) {
      audio.src = currentSong.audioUrl;
      if (isPlaying) {
        audio.play().catch(err => onError(new Error(err.message)));
      }
    }
    
    audio.volume = volume;
    audio.playbackRate = playbackSpeed;

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [currentSong, isPlaying, volume, playbackSpeed]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, [onEnded]);

  return null;
};

export default AudioPlayer;