import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useLayoutEffect } from 'react';
import { Dimensions } from 'react-native';
import { LottieContainer, SplashText } from './styles';

const Splash = () => {
  const { navigate } = useNavigation();

  useLayoutEffect(() => {
    setTimeout(() => {
      navigate('HomeTabs' as never);
    }, 3000);
  }, [navigate]);

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
