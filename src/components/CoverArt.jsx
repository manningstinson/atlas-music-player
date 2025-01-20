import React from "react";
import coverArt from '../assets/placeholder.svg';

const CoverArt = () => {
return (
  <div className="w-400 h-400">
    <img src={coverArt} alt="Album Cover" className="w-full h-full object-cover" />
  </div>
)
}

export default CoverArt;