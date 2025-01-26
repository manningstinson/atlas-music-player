import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import PlayListItem from "./PlayListItem";


export default function MusicPlayer() {
  return (
    <div className="max-w-xl flex flex-col gap-4">
      <CoverArt />
      <div className="max-w-xl px-2">
        <SongTitle />
        <PlayControls />
        <VolumeControls />
      </div>
      <PlayListItem />
    </div>
  );
}