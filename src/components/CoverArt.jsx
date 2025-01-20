import React from "react";
import coverArt from "../assets/cover-art.jpg"; // Assuming the placeholder image is in the assets folder

const CoverArt = () => {
return (
  <div className="w-40 h-40">
    <img src={coverArt} alt="Album Cover" className="w-full h-full object-cover" />
  </div>
)
}

export default CoverArt;