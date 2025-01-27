import React from 'react';
import { PlayControlsProps } from '../types/types';
import Back from "../assets/icons/back.svg";
import Play from "../assets/icons/play.svg";  // You'll need to split the play-pause into separate icons
import Pause from "../assets/icons/pause.svg";
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
    <div className="flex items-center justify-between w-full mt-4 pb-4">
      <button
        onClick={onSpeedChange}
        className="flex items-center hover:opacity-80 text-2xl font-medium"
      >
        {playbackSpeed}x
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
          <img src={Pause} alt="Pause" className="w-8 h-8" />
        ) : (
          <img src={Play} alt="Play" className="w-8 h-8" />
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