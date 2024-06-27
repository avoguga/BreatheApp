import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { MusicItem } from "../../types";
import {
  ItemContainer,
  ItemInfo,
  PlayerButton,
  Progress,
  ProgressBar,
  Title,
} from "./styles";

interface SongItemProps {
  musicItem: MusicItem;
  playSound: (file: string, id: string) => void;
  stopSound: () => void;
  isPlaying: boolean;
  isLoading: boolean;
}

export const SongItem: React.FC<SongItemProps> = ({
  musicItem,
  playSound,
  stopSound,
  isPlaying,
  isLoading,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 0));
      }, 1000);
    } else if (!isPlaying) {
      setProgress(0);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  const handlePress = () => {
    if (isPlaying) {
      stopSound();
    } else {
      playSound(musicItem.file, musicItem.id);
    }
  };

  return (
    <ItemContainer onPress={handlePress}>
      <ItemInfo>
        <Title>{musicItem.title}</Title>
        <ProgressBar>
          <Progress style={{ width: `${progress}%` }} />
        </ProgressBar>
      </ItemInfo>
      <PlayerButton onPress={handlePress}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Feather name={isPlaying ? "pause" : "play"} size={24} color="#fff" />
        )}
      </PlayerButton>
    </ItemContainer>
  );
};

export default SongItem;
