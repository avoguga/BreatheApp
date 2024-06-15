import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';
import { LottieContainer, SplashText } from './styles';

const Splash = () => {
  const { navigate } = useNavigation();
  return (
    <LottieContainer>
      <LottieView
        autoPlay
        style={{ width: Dimensions.get('screen').width, height: 500 }}
        // onAnimationFinish={() => navigate('Home' as never)}
        source={require('./splash.json')}
      />
      <SplashText>BreatheApp</SplashText>
    </LottieContainer>
  );
};

export { Splash };
