import { Feather } from '@expo/vector-icons';
import { ActivityIndicator, Image } from 'react-native';
import { SongItemProps } from '../../types';
import {
  ItemArtist,
  ItemContainer,
  ItemTextContainer,
  ItemTitle,
  Player,
} from './styles';

export const SongItem: React.FC<SongItemProps> = ({
  musicItem,
  playSound,
  stopSound,
  isPlaying,
  isLoading,
}) => {
  const handlePress = () => {
    if (isPlaying) {
      stopSound();
    } else {
      playSound(musicItem.file, musicItem.id);
    }
  };

  return (
    <ItemContainer>
      <Image
        source={{ uri: musicItem.image }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <ItemTextContainer>
        <ItemTitle>{musicItem.title}</ItemTitle>
        <ItemArtist>{musicItem.artist}</ItemArtist>
      </ItemTextContainer>
      <Player onPress={handlePress}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#fff"
            style={{ width: 24, height: 24 }}
          />
        ) : (
          <Feather name={isPlaying ? 'pause' : 'play'} size={24} color="#fff" />
        )}
      </Player>
    </ItemContainer>
  );
};
