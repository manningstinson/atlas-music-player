import { SongTitleProps } from '../types/types';

const SongTitle: React.FC<SongTitleProps> = ({ currentSong }) => {
  return (
    <div 
      className="w-full border-b border-r border-l border-gray-500"
      aria-live="polite" // Announces changes to screen readers
    >
      <h2 
        className="font-inter text-2xl text-black font-bold pt-5"
        title={currentSong?.title || "No song selected"}
      >
        {currentSong?.title || "Song Title"}
      </h2>
      <p 
        className="font-inter text-sm text-gray-400 mb-2"
        title={currentSong?.artist || "No artist"}
      >
        {currentSong?.artist || "Author"}
      </p>
    </div>
  );
};

export default SongTitle;