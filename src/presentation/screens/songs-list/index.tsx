import { Container } from "@/global/components/container";
import { colors } from "@/presentation/constants/colors";
import { Feather } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { Audio } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type MusicItem = {
  id: string;
  title: string;
  artist: string;
  image: string;
  file: string; // URL do arquivo de música
};

type SongsListProps = RouteProp<{ params: { musicType: string } }, "params">;

const musicData: MusicItem[] = [
  {
    id: "1",
    title: "Manouel Gaymes",
    artist: "Artist 1",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/manoel-gomes-caneta-azul.mp3",
  },
  {
    id: "2",
    title: "NÃO CLIQUE",
    artist: "Artist 2",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/gemido-whatsapp.mp3",
  },
  {
    id: "3",
    title: "Forro do bom",
    artist: "Artist 3",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/bem-te-vi-cantando.mp3",
  },
  {
    id: "4",
    title: "Pesado metal",
    artist: "Artist 4",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/bem-te-vi-cantando.mp3",
  },
  {
    id: "5",
    title: "Musicado CLAu",
    artist: "Artist 5",
    image: "https://via.placeholder.com/150",
    file: "https://memes.casa/audios/bem-te-vi-cantando.mp3",
  },
];

export const SongsList = () => {
  const route = useRoute<SongsListProps>();
  const { musicType } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMusic, setFilteredMusic] = useState<MusicItem[]>(musicData);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<string | null>(null);

  useEffect(() => {
    setFilteredMusic(
      musicData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [searchQuery, sound]);

  const playSound = async (file: string, id: string) => {
    setIsLoading(id);
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Audio.Sound.createAsync({ uri: file });
    setSound(newSound);
    setIsLoading(null);
    setIsPlaying(id);
    await newSound.playAsync();
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(null);
    }
  };

  const renderItem = ({ item }: { item: MusicItem }) => (
    <LinearGradient colors={["#FFF", "#FFF8E1"]} style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemArtist}>{item.artist}</Text>
      </View>
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() =>
          isPlaying === item.id ? stopSound() : playSound(item.file, item.id)
        }
      >
        {isLoading === item.id ? (
          <ActivityIndicator
            size="small"
            color={colors.primary.backgroundColor}
          />
        ) : (
          <Feather
            name={isPlaying === item.id ? "pause" : "play"}
            size={24}
            color={colors.primary.backgroundColor}
          />
        )}
      </TouchableOpacity>
    </LinearGradient>
  );

  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{musicType}</Text>
      </View>
      <View style={styles.searchContainer}>
        <Feather
          name="search"
          size={20}
          color="#000"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Filtrar busca"
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="filter" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredMusic}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5BE00",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  filterButton: {
    backgroundColor: colors.primary.backgroundColor,
    borderRadius: 10,
    padding: 5,
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemArtist: {
    fontSize: 14,
    color: "#777",
  },
  moreButton: {
    padding: 5,
  },
});

export default SongsList;
