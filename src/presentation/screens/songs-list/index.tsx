import { useLanguageStore } from "@/infra/language";
import { colors } from "@/presentation/constants/colors";
import { Feather } from "@expo/vector-icons";
import storage from "@react-native-firebase/storage";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { LinearBackground } from "../../../global/components/linear-background";
import SkeletonItem from "./components/skeleton-loading";
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
import strings from "./utils/strings";

type SongsListProps = RouteProp<
  { params: { musicType: string; category: string } },
  "params"
>;

export const SongsList = () => {
  const route = useRoute<SongsListProps>();
  const { musicType, category } = route.params;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredMusic, setFilteredMusic] = useState<MusicItem[]>([]);
  const [musicData, setMusicData] = useState<MusicItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const language = useLanguageStore((state) => state.language);

  const audioImplementation = useExpoAvService();
  const audioService = useAudioPlayer(audioImplementation);

  useEffect(() => {
    fetchMusic();
  }, []);

  useEffect(() => {
    setFilteredMusic(
      musicData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, musicData]);

  const fetchMusic = async () => {
    try {
      const listResult = await storage()
        .ref(`BreathSongs/${category}`)
        .listAll();
      const items = await Promise.all(
        listResult.items.map(async (item) => {
          const url = await item.getDownloadURL();
          return {
            id: item.name,
            title: item.name.replace(".mp3", ""),
            file: url,
          } as MusicItem;
        })
      );
      console.log(category);
      setMusicData(items);
      setFilteredMusic(items);
    } catch (error) {
      console.error(strings[language].loadingError, error);
      Alert.alert("Erro", strings[language].loadingError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LinearBackground>
      <Container>
        <Header>
          <Title>{musicType}</Title>
        </Header>
        <SearchContainer>
          <Feather name="search" size={20} color={colors.primary.textColor} />
          <SearchInput
            placeholder={strings[language].filterSearchPlaceholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
        </SearchContainer>
        {isLoading ? (
          <FlatList
            data={[...Array(5).keys()]}
            renderItem={() => <SkeletonItem />}
            keyExtractor={(item) => item.toString()}
          />
        ) : (
          <FlatList
            data={filteredMusic}
            renderItem={({ item }) => (
              <SongItem
                musicItem={item}
                playSound={audioService.playSound}
                stopSound={audioService.stopSound}
                isPlaying={audioService.isPlaying === item.id}
                isLoading={audioService.isLoading === item.id}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </Container>
    </LinearBackground>
  );
};

export default SongsList;
