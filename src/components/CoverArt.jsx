import React from "react";
import coverArt from '../assets/placeholder.svg';

const CoverArt = () => {
return (
  <div className="w-full h-full">
    <img src={coverArt} alt="Album Cover" className="w-full h-full" />
  </div>
);
}

export default CoverArt;