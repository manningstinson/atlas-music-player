import React from 'react';
import { PlayControlsProps } from '../types/types';
import Back from "../assets/icons/back.svg";
import Shuffle from "../assets/icons/shuffle.svg";
import Skip from "../assets/icons/skip.svg";
import PlayIcon from "../assets/icons/play.svg";
import PauseIcon from "../assets/icons/pause.svg";

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
    <div className="flex items-center justify-between full pb-6 mt-6">
      <button
        onClick={onSpeedChange}
        className="w-6 h-6 "
      >
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
        {isPlaying ? (
          <img
            src={PauseIcon}
            alt="Pause"
            className="w-8 h-8"
          />
        ) : (
          <img
            src={PlayIcon}
            alt="Play"
            className="w-8 h-8"
          />
        )}
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