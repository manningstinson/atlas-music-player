import SpeakerIcon from "../assets/icons/speaker-icon.svg";

const VolumeControls = () => {
  return (
    <div className="volume-container flex gap-2 w-full">
      <img src={SpeakerIcon} alt="Volume Icon" className="volume-icon w-6 h-6 dark:invert" />
      <div className="volume-container flex w-full">
        <input
          type="range"
          min="0"
          max="100"
          value="50"
          className="w-full h-4 mt-1 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default VolumeControls;