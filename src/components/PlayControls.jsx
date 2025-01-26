import React from "react";
import PlatySpeed from "../assets/icons/play-speed.svg";
import Back from "../assets/icons/back.svg";
import PlayPause from "../assets/icons/play-pause.svg";
import Shuffle from "../assets/icons/shuffle.svg";
import Skip from "../assets/icons/skip.svg";


const PlayControls = () => {
    return (
<div className="flex items-center justify-between full pt-8 pb-4 ">
      <img src={PlatySpeed} alt="Speed" className="w-6 h-6" />
      <img src={Back} alt="Previous" className="w-6 h-6" />
      <img src={PlayPause} alt="Play/Pause" className="w-8 h-8" />
      <img src={Skip} alt="Next" className="w-6 h-6" />
      <img src={Shuffle} alt="Shuffle" className="w-6 h-6" />
    </div>
    );
};
export default PlayControls;