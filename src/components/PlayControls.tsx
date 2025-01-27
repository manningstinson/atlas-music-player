import React from 'react';
import { PlayControlsProps } from '../types/types';
import PlaySpeed from "../assets/icons/play-speed.svg";
import Back from "../assets/icons/back.svg";
import PlayPause from "../assets/icons/play-pause.svg";
import Shuffle from "../assets/icons/shuffle.svg";
import Skip from "../assets/icons/skip.svg";

const PlayControls: React.FC<PlayControlsProps> = ({
  isPlaying,
  isShuffle,
  playbackSpeed,
  onPlayPause,
  onNext,
  onPrevious,
  onShuffleToggle,
  onSpeedChange
}) => {
  return (
    <div className="flex items-center justify-between w-full pb-4">
      <button
        onClick={onSpeedChange}
        className="flex items-center hover:opacity-80"
      >
        <img src={PlaySpeed} alt="Speed" className="w-6 h-6" />
        <span className="ml-1">{playbackSpeed}x</span>
      </button>

      <button
        onClick={onPrevious}
        className="hover:opacity-80"
      >
        <img src={Back} alt="Previous" className="w-6 h-6" />
      </button>

      <button
        onClick={onPlayPause}
        className="hover:opacity-80"
      >
        <img
          src={PlayPause}
          alt={isPlaying ? "Pause" : "Play"}
          className="w-8 h-8"
        />
      </button>

      <button
        onClick={onNext}
        className="hover:opacity-80"
      >
        <img src={Skip} alt="Next" className="w-6 h-6" />
      </button>

      <button
        onClick={onShuffleToggle}
        className={`hover:opacity-80 ${isShuffle ? 'text-blue-500' : ''}`}
      >
        <img src={Shuffle} alt="Shuffle" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PlayControls;