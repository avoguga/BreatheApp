import { useCallback, useState } from 'react';
import { IAudioService } from './types';

export const useAudioPlayer = (audioService: IAudioService) => {
  const [isPlaying, setIsPlaying] = useState<string | null>(
    audioService.isPlaying
  );
  const [isLoading, setIsLoading] = useState<string | null>(
    audioService.isLoading
  );

  const playSound = useCallback(
    async (file: string, id: string) => {
      setIsLoading(id);
      await audioService.playSound(file, id);
      setIsPlaying(id);
      setIsLoading(null);
    },
    [audioService]
  );

  const stopSound = useCallback(async () => {
    await audioService.stopSound();
    setIsPlaying(null);
  }, [audioService]);

  return { isPlaying, isLoading, playSound, stopSound };
};
