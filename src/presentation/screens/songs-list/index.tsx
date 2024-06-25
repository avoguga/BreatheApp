import { colors } from "@/presentation/constants/colors";
import { Feather } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { LinearBackground } from "../../../global/components/linear-background";
import { SongItem } from "./components/song-item";
import { useExpoAvService } from "./hooks/implementations/use-expo-av-service";
import { useAudioPlayer } from "./hooks/use-audio-player";
import {
  Container,
  Header,
  SearchContainer,
  SearchInput,
  Title,
} from "./styles";
import { MusicItem } from "./types";

type SongsListProps = RouteProp<{ params: { musicType: string } }, "params">;

const musicData: MusicItem[] = [
  {
    id: "1",
    title: "Musica 1",
    artist: "Artist 1",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/manoel-gomes-caneta-azul.mp3",
  },
  {
    id: "2",
    title: "Musica 2",
    artist: "Artist 2",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/gemido-whatsapp.mp3",
  },
  {
    id: "3",
    title: "Musica 3",
    artist: "Artist 3",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/bem-te-vi-cantando.mp3",
  },
  {
    id: "4",
    title: "Musica 4",
    artist: "Artist 4",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/bem-te-vi-cantando.mp3",
  },
  {
    id: "5",
    title: "Musica 5",
    artist: "Artist 5",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/bem-te-vi-cantando.mp3",
  },
];

export const SongsList = () => {
  const route = useRoute<SongsListProps>();
  const { musicType } = route.params;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMusic, setFilteredMusic] = useState<MusicItem[]>(musicData);

  const audioImplementation = useExpoAvService();
  const audioService = useAudioPlayer(audioImplementation);

  useEffect(() => {
    setFilteredMusic(
      musicData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <LinearBackground>
      <Container>
        <Header>
          <Title>{musicType}</Title>
        </Header>
        <SearchContainer>
          <Feather name="search" size={20} color={colors.primary.textColor} />
          <SearchInput
            placeholder="Filtrar busca"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </SearchContainer>
        <FlatList
          data={filteredMusic}
          renderItem={({ item }) => (
            <SongItem
              musicItem={item}
              playSound={audioService.playSound}
              stopSound={audioService.stopSound}
              isPlaying={
                (audioService.isPlaying === item.id) as unknown as string
              }
              isLoading={
                (audioService.isLoading === item.id) as unknown as string
              }
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </LinearBackground>
  );
};

export default SongsList;
