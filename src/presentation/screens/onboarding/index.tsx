import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MMKV } from "react-native-mmkv";

// Inicialize o MMKV
const storage = new MMKV();

export function Onboarding({ navigation }: any) {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const navigateToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const checkOnboarding = () => {
    try {
      const hasShownOnboarding = storage.getString("hasShownOnboarding");
      if (hasShownOnboarding) {
        setShowOnboarding(false);
        navigateToHome();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // checkOnboarding();
  }, []);

  const onFinishOnboarding = () => {
    try {
      storage.set("hasShownOnboarding", "true");
      navigateToHome();
    } catch (error) {
      console.error(error);
    }
  };

  if (!showOnboarding) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Seja bem-vindo ao Breathe!</Text>
        <Image
          source={require("../../../../assets/imgs/betterwaywork.png")}
          style={styles.image}
        />
        <Text style={styles.subtitle}>
          Torne suas viagens mais seguras e saudáveis.
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onFinishOnboarding}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1C2633",
  },
  image: {
    width: 370,
    height: 370,
    resizeMode: "contain",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    width: 200,
    color: "#1C2633",
  },
  button: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#454235",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
