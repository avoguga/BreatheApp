import { useLanguageStore } from '@/infra/language';
import { displayNotification } from '@/infra/notifee';
import { SessionOption } from '@/presentation/screens/driving-time-selector';
import { AndroidImportance } from '@notifee/react-native';
import { useEffect, useState } from 'react';
import { Vibration } from 'react-native';
import { usePomodoroStore } from '../../store';
import strings from './utils/strings';

export const useCustomTimer = (initialSession: SessionOption) => {
  const [session, setSession] = useState<SessionOption>(initialSession);
  const { setTime, time, setTimeUntilBreak, timeUntilBreak, setMode, mode } =
    usePomodoroStore();
  const language = useLanguageStore((state) => state.language);

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
        title: strings[language].restNotificationTitle,
        body: strings[language].restNotificationBody(session.rest / 60),
        android: {
          channelId: 'default',
          smallIcon: 'ic_launcher',
          importance: AndroidImportance.HIGH,
        },
      });
    } else {
      Vibration.vibrate();
      displayNotification({
        title: strings[language].workNotificationTitle,
        body: strings[language].workNotificationBody(session.work / 60),
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
