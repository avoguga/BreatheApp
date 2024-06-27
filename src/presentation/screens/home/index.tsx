import { Container } from '@/global/components/container';
import { DrivingTime } from './components/driving-time';
import { Recommended } from './components/recommended';
import { Tips } from './components/tips';

const Home = () => {
  return (
    <Container>
      <DrivingTime style={{ marginBottom: 16 }}></DrivingTime>
      <Tips />
      <Recommended />
    </Container>
  );
};

export { Home };
