import { useEffect, useState } from 'react';
import { ModeKeys } from '../../components/timer/types';
import { modes } from '../../components/utils';
import { usePomodoroStore } from '../../store';

const useTimer = () => {
  const {
    time,
    setTime,
    timeLeft,
    setTimeLeft,
    setTimeUntilBreak,
    mode,
    setMode,
  } = usePomodoroStore();
  const [pomodoroCount, setPomodoroCount] = useState(0);

  const handleInterval = () => {
    decrementTimeLeft();
    updateModeIfNeeded();
  };

  const decrementTimeLeft = () => {
    const nextTimeLeft = timeLeft - 1;
    if (mode === 'drive') {
      setTime(time + 1);
      setTimeUntilBreak(nextTimeLeft);
    }
    setTimeLeft(nextTimeLeft);
  };

  const updateModeIfNeeded = () => {
    if (timeLeft <= 0) {
      switchMode();
    }
  };

  const switchMode = () => {
    const isLongBreak = mode === 'drive' && pomodoroCount >= 3;
    const nextMode = isLongBreak ? 'longBreak' : modes[mode].next;

    if (isLongBreak) {
      setPomodoroCount(0);
    } else if (mode === 'drive') {
      setPomodoroCount(pomodoroCount + 1);
    }

    setMode(nextMode);
    setTimeLeft(modes[nextMode].duration);
    resetTimeUntilBreak(nextMode);
  };

  const resetTimeUntilBreak = (nextMode: ModeKeys) => {
    const breakTime = ['shortBreak', 'longBreak'].includes(nextMode)
      ? 0
      : modes[nextMode].duration;
    setTimeUntilBreak(breakTime);
  };

  useEffect(() => {
    const timer = setInterval(handleInterval, 1000);
    return () => clearInterval(timer);
  }, [mode, time, timeLeft, setTime, setTimeLeft, setMode, pomodoroCount]);

  return timeLeft;
};

export { useTimer };
