import { SessionOption } from '@/presentation/screens/driving-time-selector';
import { useEffect, useState } from 'react';
import { usePomodoroStore } from '../../store';

type TimerMode = 'work' | 'rest';

export const useCustomTimer = (initialSession: SessionOption) => {
  const [mode, setMode] = useState<TimerMode>('work');
  const [session, setSession] = useState<SessionOption>(initialSession);
  const { setTime, time, setTimeUntilBreak, timeUntilBreak } =
    usePomodoroStore();

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
  }, [timeUntilBreak, mode, session]);

  const switchMode = () => {
    if (mode === 'work') {
      setMode('rest');
      setTimeUntilBreak(session.rest);
    } else {
      setMode('work');
      setTimeUntilBreak(session.work);
    }
  };

  const updateSession = (newSession: SessionOption) => {
    if (session.work !== newSession.work || session.rest !== newSession.rest) {
      setSession(newSession);
      setMode('work');
      setTimeUntilBreak(newSession.work);
      return;
    }
    setMode('rest');
    setTimeUntilBreak(newSession.rest);
  };

  return {
    timeUntilBreak,
    mode,
    updateSession,
  };
};
