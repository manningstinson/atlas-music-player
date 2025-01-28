import { useEffect, useState, useCallback } from 'react';
import { CoverArtProps } from '../types/types';

const CoverArt: React.FC<CoverArtProps> = ({ currentSong }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadImage = useCallback(async () => {
    if (!currentSong?.cover) {
      console.log('No cover URL found in currentSong');
      setImageUrl('');
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(currentSong.cover, {
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Accept': 'image/*'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to load cover art:', error);
      setError('Failed to load cover art.');
      setIsLoading(false);
    }
  }, [currentSong]);

  useEffect(() => {
    loadImage();

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [currentSong, loadImage]); // Include loadImage in dependency array

  return (
    <div className="w-[400px] h-96">
      {error ? (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-red-500">
          {error}
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
          ) : (
            imageUrl ? ( // Check if imageUrl is not empty before setting src
              <img
                src={imageUrl}
                alt={`${currentSong?.title} cover`}
                className="w-full h-full rounded-lg object-cover"
                onError={() => setError('Failed to load image.')} // Handle image load errors
              />
            ) : null
          )}
        </>
      )}
    </div>
  );
};

export default CoverArt;