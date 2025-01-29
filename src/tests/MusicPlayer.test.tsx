import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import MusicPlayer from '../components/MusicPlayer';

// Mock data to match your Song type
const mockPlaylist = {
  id: "default",
  name: "My Playlist",
  songs: [
    {
      id: '1',
      title: 'Song 1',
      artist: 'Artist 1',
      genre: 'Pop',
      duration: 180,
      cover: 'cover1.jpg',
      song: 'song1.mp3'
    }
  ]
};

test('should display first song in playlist as current song by default', () => {
  render(<MusicPlayer playlist={mockPlaylist} />);
  
  const currentSongTitle = screen.getByTestId('current-song');
  expect(currentSongTitle).toHaveTextContent('Song 1');
});