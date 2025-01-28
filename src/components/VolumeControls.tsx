import { VolumeControlsProps } from '../types/types';
import Speaker from "../assets/icons/speaker-icon.svg";

const VolumeControls: React.FC<VolumeControlsProps> = ({ volume, onVolumeChange }) => {
  return (
    <div className="volume-controls flex items-center gap-2">
      <img src={Speaker} alt="Volume" className="w-6 h-6" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{ '--volume': `${volume * 100}%` } as React.CSSProperties}
      />
    </div>
  );
};

export default VolumeControls;