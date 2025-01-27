import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';
import CurrentlyPlaying from './CurrentlyPlaying';
import PlayList from './PlayList';

const MusicPlayer = () => {
  return (
    <div>
      {/* Large Screen Layout */}
      <div className="hidden lg:flex justify-between max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="max-w-xl flex flex-col gap-4 bg-white">
          <CoverArt />
          <CurrentlyPlaying />
          <div className="max-w-xl px-2">
            <PlayControls />
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
          <CoverArt />
          <CurrentlyPlaying />
          <div className="max-w-xl px-2">
            <PlayControls />
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