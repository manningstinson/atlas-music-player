import CoverArt from "./CoverArt";
import PlayControls from "./PlayControls";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";

export default function MusicPlayer() {
 return (
   <div className="max-w-xl flex flex-col gap-4">
     <CoverArt />
     <div className="max-w-xl px-4">
       <SongTitle />
       <PlayControls />
        <VolumeControls />
     </div>
   </div>
 );
}