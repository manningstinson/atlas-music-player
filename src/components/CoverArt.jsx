import React from "react";
import coverArt from '../assets/painted-in-blue.jpeg';

const CoverArt = () => {
return (
  <div className="w-full h-full">
    <img src={coverArt} alt="Album Cover" className="w-full h-full rounded-lg" />
  </div>
);
}

export default CoverArt;