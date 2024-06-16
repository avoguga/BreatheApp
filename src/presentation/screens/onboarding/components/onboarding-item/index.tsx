import { MainButton } from "@/global/components/main-button";
import { colors } from "@/presentation/constants/colors";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function index({ item }: any) {
  const navigate = useNavigation<any>();
  const { width } = useWindowDimensions();
  const endingOnboarding = () => {
    navigate.navigate("home");
  };
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
      </View>

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        {item.button ? null : (
          <Text style={styles.description}>{item.description}</Text>
        )}
        {item.button ? (
          <MainButton onPress={() => endingOnboarding()}>
            <MainButton.IconView style={{ backgroundColor: "yellow" }}>
              <MainButton.Icon name="activity" />
            </MainButton.IconView>
            <MainButton.Text>Iniciar</MainButton.Text>
          </MainButton>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    flex: 0.7,
    justifyContent: "center",
    backgroundColor: colors.primary.backgroundColor,
  },
  image: {},
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: colors.primary.textColor,
    textAlign: "center",
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
  button: {
    width: 250,
    backgroundColor: colors.primary.backgroundColor,
    borderRadius: 20,
    alignSelf: "center",
  },
});
