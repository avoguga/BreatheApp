import { Container } from '@/global/components/container';
import { MainButton } from '@/global/components/main-button';
import { useNavigation } from '@react-navigation/native';
import { DrivingTime } from './components/driving-time';
import { Recommended } from './components/recommended';
import { Tips } from './components/tips';

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <DrivingTime style={{ marginBottom: 16 }}>
        <MainButton
          onPress={() => navigate('DrivingTimeSelector' as never)}
          style={{
            alignSelf: 'flex-start',
            backgroundColor: '#336665',
            marginTop: 8,
          }}
        >
          <MainButton.Text>Começar a dirigir</MainButton.Text>
        </MainButton>
      </DrivingTime>
      <Tips />
      <Recommended />
    </Container>
  );
};

export { Home };
