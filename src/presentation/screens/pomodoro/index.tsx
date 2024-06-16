import { Container } from '@/global/components/container';
import { colors } from '@/presentation/constants/colors';
import AnimatedCircle from './components/timer';

export const Pomodoro = () => {
  return (
    <Container
      style={{
        backgroundColor: colors.primary.backgroundColor,
        justifyContent: 'center',
      }}
    >
      <AnimatedCircle
        backgroundColor="transparent"
        size={200}
        tintColor="#fff"
      />
    </Container>
  );
};
