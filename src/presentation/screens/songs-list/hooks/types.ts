export interface IAudioService {
  isPlaying: string | null;
  isLoading: string | null;
  playSound: (file: string, id: string) => Promise<void>;
  stopSound: () => Promise<void>;
}
