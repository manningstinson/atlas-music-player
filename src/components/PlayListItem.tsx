type PlayListItemProps = {
  title: string;
  artist: string;
  length: string;
  isSelected?: boolean;
};

const PlayListItem: React.FC<PlayListItemProps> = ({
  title,
  artist,
  length,
  isSelected = false
}) => {
  return (
    <div className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors duration-200
      ${isSelected ? 'currently-playing' : 'playlist-bg'}`}>
      <div className="flex-1 truncate">
        <div className={`text-sm font-bold truncate 
          ${isSelected ? 'playlist-title-selected' : 'playlist-title'}`}>
          {title}
        </div>
        <div className={`text-xs truncate 
          ${isSelected ? 'playlist-artist-selected' : 'playlist-artist'}`}>
          {artist}
        </div>
      </div>
      <div className={`text-xs ml-4 font-bold flex justify-end 
        ${isSelected ? 'playlist-title-selected' : 'playlist-title'}`}>
        {length}
      </div>
    </div>
  );
};

export default PlayListItem;