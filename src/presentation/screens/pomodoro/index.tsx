import { Container } from '@/global/components/container';
import { colors } from '@/presentation/constants/colors';
import { RootStackParamList } from '@/presentation/routes/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import AnimatedCircle from './components/timer';
import { useCustomTimer } from './hooks/use-custom-timer';

export const Pomodoro = () => {
  const { session } =
    useRoute<RouteProp<RootStackParamList, 'Pomodoro'>>().params;
  const { timeUntilBreak, mode, updateSession } = useCustomTimer(session);

  useEffect(() => {
    updateSession(session);
  }, [session]);

  return (
    <Container
      style={{
        backgroundColor: colors.primary.backgroundColor,
      }}
      contentContainerStyle={{ justifyContent: 'center' }}
    >
      <AnimatedCircle
        backgroundColor="transparent"
        size={200}
        tintColor="#fff"
        timeLeft={timeUntilBreak}
        totalDuration={mode === 'rest' ? session.rest : session.work}
      />
    </Container>
  );
};
