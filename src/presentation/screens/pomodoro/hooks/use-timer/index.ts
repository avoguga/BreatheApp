import { useEffect, useState } from 'react';
import { ModeKeys } from '../../components/timer/types';
import { modes } from '../../components/utils';

export const useTimer = (
  initialMode: ModeKeys,
  changeMode: (mode: ModeKeys) => void
): number => {
  const [timeLeft, setTimeLeft] = useState(modes[initialMode].duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      const nextMode = modes[initialMode].next;
      setTimeLeft(modes[nextMode].duration);
      changeMode(nextMode);
    }
  }, [timeLeft, changeMode, initialMode]);

  return timeLeft;
};
