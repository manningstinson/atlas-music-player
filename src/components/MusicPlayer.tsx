import { useState } from 'react';
import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import CurrentlyPlaying from './CurrentlyPlaying';
import PlayList from './PlayList';

const MusicPlayer = () => {
  // Add state management here
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<0.5 | 1 | 2>(1);
  const [isShuffle, setIsShuffle] = useState(false);

  return (
    <div>
      {/* Large Screen Layout */}
      <div className="hidden lg:flex justify-between max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="max-w-xl flex flex-col gap-4 bg-white">
          <CoverArt currentSong={null} />
          <CurrentlyPlaying />
          <div className="max-w-xl px-2">
            <PlayControls 
              isPlaying={isPlaying}
              playbackSpeed={playbackSpeed}
              isShuffle={isShuffle}
              onPlayPause={() => setIsPlaying(!isPlaying)}
              onNext={() => console.log('Next song')}
              onPrevious={() => console.log('Previous song')}
              onShuffleToggle={() => setIsShuffle(!isShuffle)}
              onSpeedChange={() => {
                setPlaybackSpeed(speed => {
                  if (speed === 0.5) return 1;
                  if (speed === 1) return 2;
                  return 0.5;
                });
              }}
            />
            <VolumeControls />
          </div>
        </div>
        {/* Right Column */}
        <div className="w-135 bg-white dark:bg-[#464659]">
          <PlayList />
        </div>
      </div>
      {/* Small Screen Layout */}
      <div className="lg:hidden flex flex-col gap-4">
        <div className="max-w-xl flex flex-col gap-4 bg-white">
          <CoverArt currentSong={null} />
          <CurrentlyPlaying />
          <div className="max-w-xl px-2">
            <PlayControls 
              isPlaying={isPlaying}
              playbackSpeed={playbackSpeed}
              isShuffle={isShuffle}
              onPlayPause={() => setIsPlaying(!isPlaying)}
              onNext={() => console.log('Next song')}
              onPrevious={() => console.log('Previous song')}
              onShuffleToggle={() => setIsShuffle(!isShuffle)}
              onSpeedChange={() => {
                setPlaybackSpeed(speed => {
                  if (speed === 0.5) return 1;
                  if (speed === 1) return 2;
                  return 0.5;
                });
              }}
            />
            <VolumeControls />
          </div>
        </div>
        <div className="max-w-xl bg-white dark:bg-[#464659]">
          <PlayList />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;