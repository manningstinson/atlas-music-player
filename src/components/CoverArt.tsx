import { useState } from 'react';
import defaultCoverArt from '../assets/placeholder.svg';
import { CoverArtProps } from '../types/types';

const CoverArt: React.FC<CoverArtProps> = ({ currentSong, onMouseEnter, onMouseLeave }) => {
  const [showLyrics, setShowLyrics] = useState(false);

  const handleMouseEnter = () => {
    setShowLyrics(true);
    onMouseEnter?.();  // Optional chaining as onMouseEnter is optional
  };

  const handleMouseLeave = () => {
    setShowLyrics(false);
    onMouseLeave?.();  // Optional chaining as onMouseLeave is optional
  };

  return (
    <div 
      className="w-full h-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={currentSong?.coverArt || defaultCoverArt}
        alt={currentSong?.title ? `${currentSong.title} by ${currentSong.artist}` : 'Album Cover'}
        className="w-full h-full rounded-lg object-cover"
      />
      
      {showLyrics && currentSong?.lyrics && (
        <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg p-4 overflow-y-auto text-white">
          <p className="whitespace-pre-line">{currentSong.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default CoverArt;