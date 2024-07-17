import { useAuth } from "@/contexts/auth-provider";
import { storage } from "@/infra/storage";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { Dimensions } from "react-native";
import { LottieContainer, SplashText } from "./styles";

const Splash = () => {
  const navigation = useNavigation();
  const { getString } = storage;
  const { currentUser } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasShownOnboarding = getString({ key: "hasShownOnboarding" });
      if (currentUser) {
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeTabs" as never }],
        });
      } else if (hasShownOnboarding) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" as never }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "Onboarding" as never }],
        });
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation, currentUser]);

  return (
    <LottieContainer>
      <LottieView
        autoPlay
        style={{ width: Dimensions.get("screen").width, height: 500 }}
        source={require("./splash.json")}
      />
      <SplashText>BreatheApp</SplashText>
    </LottieContainer>
  );
};

export { Splash };
