import {
  Audio,
  AVPlaybackStatus,
  AVPlaybackStatusSuccess,
  InterruptionModeAndroid,
} from "expo-av";
import { useCallback, useEffect, useState } from "react";
import { IAudioService } from "./types";

export const useAudioPlayer = (audioService: IAudioService) => {
  const [isPlaying, setIsPlaying] = useState<string | null>(
    audioService.isPlaying
  );
  const [isLoading, setIsLoading] = useState<string | null>(
    audioService.isLoading
  );
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      // interruptionModeIOS: InterruptionModeIOS.DuckOthers, deixa isso pra depois rapa
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
    [sound]
  );

  const stopSound = useCallback(async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }
    setIsPlaying(null);
    setSound(null);
  }, [sound]);

  return { isPlaying, isLoading, playSound, stopSound };
};
