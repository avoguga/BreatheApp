import { Container } from "@/global/components/container";
import { colors } from "@/presentation/constants/colors";
import { Feather } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
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
};

type SongsListProps = RouteProp<{ params: { musicType: string } }, "params">;

const musicData: MusicItem[] = [
  {
    id: "1",
    title: "ASMRReh",
    artist: "Artist 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Swinguera da estrada",
    artist: "Artist 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Forro do bom",
    artist: "Artist 3",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    title: "Pesado metal",
    artist: "Artist 4",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    title: "Musicado CLAu",
    artist: "Artist 5",
    image: "https://via.placeholder.com/150",
  },
];

export const SongsList = () => {
  const route = useRoute<SongsListProps>();
  const { musicType } = route.params;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMusic, setFilteredMusic] = useState<MusicItem[]>(musicData);

  useEffect(() => {
    setFilteredMusic(
      musicData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const renderItem = ({ item }: { item: MusicItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemArtist}>{item.artist}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Feather
          name="more-vertical"
          size={24}
          color={colors.primary.backgroundColor}
        />
      </TouchableOpacity>
    </View>
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
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
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
    backgroundColor: "#FFF",
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
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  itemArtist: {
    fontSize: 14,
    color: "#777",
  },
  moreButton: {
    padding: 5,
  },
});
