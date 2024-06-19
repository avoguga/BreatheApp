import { SessionOption } from '@/presentation/screens/driving-time-selector';
import { useEffect, useState } from 'react';
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
