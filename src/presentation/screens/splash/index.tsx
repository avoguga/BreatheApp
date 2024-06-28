import { storage } from '@/infra/storage';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useLayoutEffect } from 'react';
import { Dimensions } from 'react-native';
import { LottieContainer, SplashText } from './styles';

const Splash = () => {
  const navigation = useNavigation();
  const { getString } = storage;

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: (getString({ key: 'hasShownOnboarding' })
              ? 'HomeTabs'
              : 'Onboarding') as never,
          },
        ],
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LottieContainer>
      <LottieView
        autoPlay
        style={{ width: Dimensions.get('screen').width, height: 500 }}
        source={require('./splash.json')}
      />
      <SplashText>BreatheApp</SplashText>
    </LottieContainer>
  );
};

export { Splash };
