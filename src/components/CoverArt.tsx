import defaultCoverArt from '../assets/painted-in-blue.jpeg';

interface Song {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
}

interface CoverArtProps {
  currentSong: Song | null;
}

const CoverArt: React.FC<CoverArtProps> = ({ currentSong }) => {
  // Added console.log to check what image is being used
  console.log('Current album art:', currentSong?.albumArt || 'Using default image');

  return (
    <div className="w-full h-full">
      <img 
        src={currentSong?.albumArt || defaultCoverArt} 
        alt="Album Cover" 
        className="w-full h-full rounded-lg" 
      />
    </div>
  );
}

export default CoverArt;