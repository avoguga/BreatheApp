import { Container } from '@/global/components/container';
import { MainButton } from '@/global/components/main-button';
import { FlatList } from 'react-native';
import { Card } from './components/card';
import { DrivingTime } from './components/driving-time';
import { mock } from './utils';

const Home = () => {
  return (
    <Container>
      <DrivingTime>
        <DrivingTime.Text>Tempo total dirigindo: 01:32:02</DrivingTime.Text>
        <DrivingTime.Text>Tempo até dar uma pausa: 01:32:02</DrivingTime.Text>
        <MainButton
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
