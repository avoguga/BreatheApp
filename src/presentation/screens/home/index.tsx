import { Container } from '@/global/components/container';
import { MainButton } from '@/global/components/main-button';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { usePomodoroStore } from '../pomodoro/store';
import { Card } from './components/card';
import { DrivingTime } from './components/driving-time';
import { formatTime, mock } from './utils';

const Home = () => {
  const { navigate } = useNavigation();
  const { time, timeUntilBreak } = usePomodoroStore();
  console.log(time, timeUntilBreak);
  return (
    <Container>
      <DrivingTime>
        <DrivingTime.Text>
          Tempo total dirigindo: {formatTime(time)}
        </DrivingTime.Text>
        <DrivingTime.Text>
          Tempo até dar uma pausa: {formatTime(timeUntilBreak)}
        </DrivingTime.Text>
        <MainButton
          onPress={() => navigate('Pomodoro' as never)}
          style={{
            alignSelf: 'flex-start',
            backgroundColor: '#336665',
            marginTop: 8,
          }}
        >
          <MainButton.Text>Começar a dirigir</MainButton.Text>
        </MainButton>
      </DrivingTime>
      <FlatList
        data={mock}
        horizontal
        scrollEnabled
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 8,
        }}
        renderItem={({ item }) => (
          <Card>
            <Card.Image source={{ uri: item.uri }}>
              <Card.Text>{item.title}</Card.Text>
              <MainButton
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: '#336665',
                  marginTop: 8,
                }}
              >
                <MainButton.Text>Começar a dirigir</MainButton.Text>
              </MainButton>
            </Card.Image>
          </Card>
        )}
      />
    </Container>
  );
};

export { Home };
