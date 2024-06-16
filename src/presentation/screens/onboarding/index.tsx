import OnboardingItem from "@/presentation/screens/onboarding/components/onboarding-item";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { Animated, FlatList, StyleSheet, View } from "react-native";
import Paginator from "./components/paginator";
import onboardingItens from "./utils/onboarding-itens";

export function Onboarding({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);
  const [showOnboarding, setShowOnboarding] = useState(true);

  const navigateToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "HomeTabs" }],
    });
  };

  const checkOnboarding = async () => {
    try {
      const hasShownOnboarding = await AsyncStorage.getItem(
        "hasShownOnboarding"
      );
      if (hasShownOnboarding) {
        setShowOnboarding(false);
        // navigateToHome();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentIndex === onboardingItens.length - 1) {
      onFinishOnboarding();
      // navigateToHome();
    }
  }, [currentIndex]);

  useEffect(() => {
    // checkOnboarding();
  }, []);

  const onFinishOnboarding = async () => {
    try {
      // await AsyncStorage.setItem("hasShownOnboarding", "true");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (currentIndex === onboardingItens.length - 1) {
      onFinishOnboarding();
    }
  }, [currentIndex]);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderItem = ({ item }: any) => <OnboardingItem item={item} />;

  if (!showOnboarding) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={onboardingItens.map((item: any) => item)}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: false,
            }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>

      <Paginator data={onboardingItens} scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
