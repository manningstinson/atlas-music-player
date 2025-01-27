import React from "react";
import { CoverArtProps } from '../types/types';

const CoverArt: React.FC<CoverArtProps> = ({ currentSong }) => {
  return (
    <div className="w-[450px] h-[450px]">
      {currentSong?.coverArt ? (
        <img
          src={currentSong.coverArt}
          alt={`${currentSong.title} cover`}
          className="w-full h-full rounded-lg"
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <svg
            className="w-24 h-24 text-gray-400"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
              fill="currentColor"
            />
            <path
              d="M24 14.4c-5.84 0-10.6 4.76-10.6 10.6 0 5.84 4.76 10.6 10.6 10.6 5.84 0 10.6-4.76 10.6-10.6 0-5.84-4.76-10.6-10.6-10.6zm0 17.2c-3.64 0-6.6-2.96-6.6-6.6 0-3.64 2.96-6.6 6.6-6.6 3.64 0 6.6 2.96 6.6 6.6 0 3.64-2.96 6.6-6.6 6.6z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CoverArt;