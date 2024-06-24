import { displayNotification } from '@/infra/notifee';
import { SessionOption } from '@/presentation/screens/driving-time-selector';
import { AndroidImportance } from '@notifee/react-native';
import { useEffect, useState } from 'react';
import { Vibration } from 'react-native';
import { usePomodoroStore } from '../../store';
export const useCustomTimer = (initialSession: SessionOption) => {
  const [session, setSession] = useState<SessionOption>(initialSession);
  const { setTime, time, setTimeUntilBreak, timeUntilBreak, setMode, mode } =
    usePomodoroStore();

  useEffect(() => {
    setMode('work');
    setTimeUntilBreak(session.work);
  }, [session]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
      if (timeUntilBreak > 0) {
        setTimeUntilBreak(timeUntilBreak - 1);
      } else {
        switchMode();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, timeUntilBreak, mode, session]);

  const switchMode = () => {
    const nextMode = mode === 'work' ? 'rest' : 'work';
    if (nextMode === 'rest') {
      Vibration.vibrate();
      displayNotification({
        title: '⏰ Pausa!',
        body: `Hora de descansar! Relaxe por ${session.rest} minutos. 😌`,
        android: {
          channelId: 'default',
          smallIcon: 'ic_launcher',
          importance: AndroidImportance.HIGH,
        },
      });
    }
    setMode(nextMode);
    setTimeUntilBreak(nextMode === 'work' ? session.work : session.rest);
  };

  const updateSession = (newSession: SessionOption) => {
    if (session.work !== newSession.work || session.rest !== newSession.rest) {
      setSession(newSession);
    }
  };

  return {
    timeUntilBreak,
    mode,
    updateSession,
  };
};
