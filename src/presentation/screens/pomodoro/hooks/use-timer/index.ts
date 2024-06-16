import { useEffect, useState } from 'react';
import { ModeKeys } from '../../components/timer/types';
import { modes } from '../../components/utils';

export const useTimer = (
  mode: ModeKeys,
  changeMode: (mode: ModeKeys) => void
): number => {
  const [timeLeft, setTimeLeft] = useState(modes[mode].duration);
  const [pomodoroCount, setPomodoroCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      if (mode === 'drive') {
        setPomodoroCount(pomodoroCount + 1);
      }

      const isLongBreak = mode === 'drive' && pomodoroCount >= 3;
      const nextMode = isLongBreak ? 'longBreak' : modes[mode].next;

      setTimeLeft(modes[nextMode].duration);
      changeMode(nextMode);

      if (isLongBreak) {
        setPomodoroCount(0);
      }
    }
  }, [timeLeft, mode, changeMode, pomodoroCount]);

  return timeLeft;
};
