import { CurrentlyPlayingProps } from '../types/types';

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({ currentSong }) => {
  return (
    <div className="flex items-center justify-between py-2 border border-gray-500 p-3 rounded-lg mt-7">
      <div className="flex-1 truncate">
        <div className="text-3xl font-bold truncate text-gray-900">
          {currentSong?.title || 'Painted in Blue'}
        </div>
        <div className="text-2xl truncate text-gray-500">
          {currentSong?.artist || 'Soul Canvas'}
        </div>
      </div>
      <div className="text-xl ml-4 text-gray-500">
        {currentSong?.duration ? `${Math.floor(currentSong.duration / 60)}:${String(currentSong.duration % 60).padStart(2, '0')}` : '5:55'}
      </div>
    </div>
  );
};

export default CurrentlyPlaying;