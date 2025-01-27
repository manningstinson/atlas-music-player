import SpeakerIcon from "../assets/icons/speaker-icon.svg";

interface VolumeControlsProps {
  volume?: number;
  onVolumeChange?: (volume: number) => void;
}

const VolumeControls: React.FC<VolumeControlsProps> = ({ 
  volume = 50,
  onVolumeChange = () => {} 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    onVolumeChange(newVolume);
  };

  return (
    <div className="volume-container flex gap-2 w-full">
      <img 
        src={SpeakerIcon} 
        alt="Volume Icon" 
        className="volume-icon w-6 h-6 dark:invert" 
      />
      <div className="volume-container flex w-full">
        <style>
          {`
            @layer components {
              input[type="range"] {
                background: linear-gradient(to right, #464659 ${volume}%, #eee ${volume}%) !important;
              }
              .dark input[type="range"] {
                background: linear-gradient(to right, #196aac ${volume}%, #eee ${volume}%) !important;
              }
            }
          `}
        </style>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleChange}
          className="w-full h-4 mt-1 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default VolumeControls;