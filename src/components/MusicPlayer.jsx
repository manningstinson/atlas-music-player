import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";

export default function MusicPlayer() {
  return <div className="w-player-large h-player-large md:w-player-small md:h-player-small">
  <>
    {/* Your music player content here */}
    <CoverArt />
    <SongTitle />
    <PlayControls />
    <VolumeControls />
  </>
</div>
}
