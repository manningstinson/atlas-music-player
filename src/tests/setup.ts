import { vi } from 'vitest';

// Mock document and window objects
Object.defineProperty(window, 'document', {
  value: {
    createElement: vi.fn(),
    body: {
      appendChild: vi.fn(),
      removeChild: vi.fn()
    }
  },
  writable: true
});

// Mock fetch
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    headers: new Headers(),
    redirected: false,
    type: 'basic',
    url: '',
    clone: () => this,
    body: null,
    bodyUsed: false,
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData()),
    json: () => Promise.resolve([{
      id: '1',
      title: 'Test Song 1',
      artist: 'Test Artist 1',
      genre: 'Test Genre',
      duration: 180,
      cover: 'test-cover-1.jpg',
      song: 'test-song-1.mp3'
    }]),
    text: () => Promise.resolve(''),
    bytes: () => Promise.resolve(new Uint8Array())
  })
) as unknown as typeof fetch;