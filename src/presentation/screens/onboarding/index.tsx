import { useLanguageStore } from '@/infra/language';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import strings from './utils/strings';

// Inicialize o MMKV
const storage = new MMKV();

export function Onboarding() {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const { reset } = useNavigation();
  const language = useLanguageStore((state) => state.language);

  const navigateToHome = () => {
    reset({
      index: 0,
      routes: [{ name: 'Login' as never }],
    });
  };

  const checkOnboarding = () => {
    try {
      const hasShownOnboarding = storage.getString('hasShownOnboarding');
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
      storage.set('hasShownOnboarding', 'true');
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
        <Text style={styles.title}>{strings[language].welcome}</Text>
        <Image
          source={require('../../../../assets/imgs/betterwaywork.png')}
          style={styles.image}
        />
        <Text style={styles.subtitle}>{strings[language].subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onFinishOnboarding}>
        <Text style={styles.buttonText}>{strings[language].start}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1C2633',
  },
  image: {
    width: 370,
    height: 370,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    width: 200,
    color: '#1C2633',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#454235',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
