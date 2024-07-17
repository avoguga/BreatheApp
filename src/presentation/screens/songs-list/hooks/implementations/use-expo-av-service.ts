import { Audio } from "expo-av";
import { useCallback } from "react";
import { useAudioStore } from "../../store/audioStore";
import { IAudioService } from "../types";

export const useExpoAvService = (): IAudioService => {
  const sound = useAudioStore((state) => state.sound);
  const isPlaying = useAudioStore((state) => state.isPlaying);
  const isLoading = useAudioStore((state) => state.isLoading);
  const setSound = useAudioStore((state) => state.setSound);
  const setIsPlaying = useAudioStore((state) => state.setIsPlaying);
  const setIsLoading = useAudioStore((state) => state.setIsLoading);

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
    [sound, setIsLoading, setIsPlaying, setSound]
  );

  const stopSound = useCallback(async (): Promise<void> => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(null);
    }
  }, [sound, setIsPlaying]);

  return { isPlaying, isLoading, playSound, stopSound };
};
