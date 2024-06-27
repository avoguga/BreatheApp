import { colors } from "@/presentation/constants/colors";
import { RootStackParamList } from "@/presentation/routes/stack";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type DriverTipsProps = StackScreenProps<RootStackParamList, "DriverTips">;

export const DriverTips: React.FC<DriverTipsProps> = ({ route }) => {
  const { tip } = route.params;

  const regex = /(?<=[.?!])\s+(?=[A-Z"“])/;
  const paragraphs = tip.fullArticleText.split(regex).filter((p) => p);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: tip.uri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{tip.title}</Text>
        <Text style={styles.description}>{tip.description}</Text>
        {paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.fullArticleText}>
            {paragraph.trim()}
          </Text>
        ))}
        <View style={styles.linksContainer}>
          <Text style={styles.linksTitle}>Leia mais:</Text>
          {tip.additionalLinks.map((link: any, index: any) => (
            <TouchableOpacity key={index} onPress={() => openLink(link.url)}>
              <Text style={styles.link}>{link.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: colors.secondary.backgroundColor,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 30,
    resizeMode: "cover",
  },
  textContainer: {
    paddingHorizontal: 10,
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    color: "#555",
    marginBottom: 15,
  },
  fullArticleText: {
    fontSize: 16,
    textAlign: "justify",
    color: "#666",
    lineHeight: 24,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  linksContainer: {
    marginTop: 20,
  },
  linksTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  link: {
    fontSize: 16,
    color: "#007BFF",
    marginBottom: 5,
  },
});
