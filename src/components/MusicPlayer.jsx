import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import CurrentlyPlaying from "./CurrentlyPlaying";
import PlayList from "./PlayList";

export default function MusicPlayer() {
  return (
    <div className="max-w-xl flex flex-col gap-4">
      <CoverArt />
      <CurrentlyPlaying />
      <div className="max-w-xl px-2">
        <PlayControls />
        <VolumeControls />
      </div>
      <PlayList />
    </div>
  );
}