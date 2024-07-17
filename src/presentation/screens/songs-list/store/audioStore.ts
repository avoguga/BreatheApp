import { Audio } from "expo-av";
import { create } from "zustand";

interface AudioState {
  isPlaying: string | null;
  isLoading: string | null;
  sound: Audio.Sound | null;
  setIsPlaying: (id: string | null) => void;
  setIsLoading: (id: string | null) => void;
  setSound: (sound: Audio.Sound | null) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  isPlaying: null,
  isLoading: null,
  sound: null,
  setIsPlaying: (id) => set({ isPlaying: id }),
  setIsLoading: (id) => set({ isLoading: id }),
  setSound: (sound) => set({ sound }),
}));
