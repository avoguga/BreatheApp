import { Container } from '@/global/components/container';
import { Recommended } from './components/recommended';
import { Tips } from './components/tips';

const Home = () => {
  return (
    <Container>
      <Tips />
      <Recommended />
    </Container>
  );
};

export { Home };
