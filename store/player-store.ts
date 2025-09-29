import { create } from 'zustand';

export interface Track {
  id: string;
  title: string;
  artist: string;
  album?: string;
  duration: number;
  thumbnail: string;
  url: string;
  isLiked?: boolean;
}

interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  isPlaying: boolean;
  volume: number;
  currentTime: number;
  isShuffleOn: boolean;
  isRepeatOn: boolean;
  
  // Actions
  setCurrentTrack: (track: Track) => void;
  setQueue: (tracks: Track[]) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  setCurrentTime: (time: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  currentTrack: null,
  queue: [],
  isPlaying: false,
  volume: 1,
  currentTime: 0,
  isShuffleOn: false,
  isRepeatOn: false,

  setCurrentTrack: (track) => set({ currentTrack: track }),
  setQueue: (tracks) => set({ queue: tracks }),
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (volume) => set({ volume }),
  setCurrentTime: (time) => set({ currentTime: time }),
  toggleShuffle: () => set((state) => ({ isShuffleOn: !state.isShuffleOn })),
  toggleRepeat: () => set((state) => ({ isRepeatOn: !state.isRepeatOn })),
  
  nextTrack: () => {
    const { queue, currentTrack, isShuffleOn } = get();
    if (!currentTrack || queue.length === 0) return;
    
    const currentIndex = queue.findIndex(track => track.id === currentTrack.id);
    let nextIndex;
    
    if (isShuffleOn) {
      nextIndex = Math.floor(Math.random() * queue.length);
    } else {
      nextIndex = (currentIndex + 1) % queue.length;
    }
    
    set({ currentTrack: queue[nextIndex] });
  },
  
  previousTrack: () => {
    const { queue, currentTrack } = get();
    if (!currentTrack || queue.length === 0) return;
    
    const currentIndex = queue.findIndex(track => track.id === currentTrack.id);
    const previousIndex = currentIndex === 0 ? queue.length - 1 : currentIndex - 1;
    
    set({ currentTrack: queue[previousIndex] });
  },
}));