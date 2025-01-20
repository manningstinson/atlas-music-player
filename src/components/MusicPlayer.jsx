import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";

export default function MusicPlayer() {
  return <div className="w-player-large h-player-large md:w-player-small md:h-player-small">
  <>
    {/* Your music player content here */}
    <CoverArt />
    <SongTitle />
  </>
</div>
}
