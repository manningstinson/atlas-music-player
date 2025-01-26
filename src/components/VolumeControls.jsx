import React from "react";
import SpeakerIcon from "../assets/icons/speaker-icon.svg";

const VolumeControls = () => {
  return (
    <div>
      <div className="volume-container flex center">
        <img src={SpeakerIcon} alt="Volume Icon" className="volume-icon w-6 h-6" />
        <div className="volume-container flex center">
        <input type="range" min="0" max="100" value="50" className="volume-slider" />
      </div>
      </div>
    </div>
  );
};

export default VolumeControls;