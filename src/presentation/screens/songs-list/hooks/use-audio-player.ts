import {
  Audio,
  AVPlaybackStatus,
  AVPlaybackStatusSuccess,
  InterruptionModeAndroid,
} from "expo-av";
import { useCallback, useEffect } from "react";
import { useAudioStore } from "../store/audioStore";
import { IAudioService } from "./types";

export const useAudioPlayer = (audioService: IAudioService) => {
  const isPlaying = useAudioStore((state) => state.isPlaying);
  const isLoading = useAudioStore((state) => state.isLoading);
  const sound = useAudioStore((state) => state.sound);
  const setIsPlaying = useAudioStore((state) => state.setIsPlaying);
  const setIsLoading = useAudioStore((state) => state.setIsLoading);
  const setSound = useAudioStore((state) => state.setSound);

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    });
  }, []);

  const playSound = useCallback(
    async (file: string, id: string) => {
      setIsLoading(id);
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: file },
        { shouldPlay: true }
      );
      setSound(newSound);
      setIsPlaying(id);
      setIsLoading(null);

      newSound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
        if ((status as AVPlaybackStatusSuccess).didJustFinish) {
          setIsPlaying(null);
        }
      });
    },
    [sound, setIsLoading, setIsPlaying, setSound]
  );

  const stopSound = useCallback(async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }
    setIsPlaying(null);
    setSound(null);
  }, [sound, setIsPlaying, setSound]);

  return { isPlaying, isLoading, playSound, stopSound };
};
