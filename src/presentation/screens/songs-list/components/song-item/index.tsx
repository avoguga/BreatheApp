import { Feather } from '@expo/vector-icons';
import { ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { SongItemProps } from '../../types';
import {
  ItemArtist,
  ItemContainer,
  ItemTextContainer,
  ItemTitle,
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
      <TouchableOpacity onPress={handlePress} style={{ marginRight: 8 }}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#000" />
        ) : (
          <Feather name={isPlaying ? 'pause' : 'play'} size={24} color="#000" />
        )}
      </TouchableOpacity>
    </ItemContainer>
  );
};
