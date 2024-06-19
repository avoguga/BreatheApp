import { Audio } from 'expo-av';
import { useCallback, useState } from 'react';
import { IAudioService } from '../types';

export const useExpoAvService = (): IAudioService => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const playSound = useCallback(
    async (file: string, id: string): Promise<void> => {
      setIsLoading(id);
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync({ uri: file });
      setSound(newSound);
      setIsPlaying(id);
      setIsLoading(null);
      await newSound.playAsync();
    },
    [sound, setIsLoading, setIsPlaying]
  );

  const stopSound = useCallback(async (): Promise<void> => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(null);
    }
  }, [sound]);

  return { isPlaying, isLoading, playSound, stopSound };
};
