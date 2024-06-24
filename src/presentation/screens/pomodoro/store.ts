import { storage } from '@/infra/storage';
import { formatISO, startOfDay } from 'date-fns';
import { create } from 'zustand';
import { ModeKeys } from './components/timer/types';
import { modes } from './components/utils';

interface IPomodoroStore {
  time: number;
  timeUntilBreak: number;
  timeLeft: number;
  mode: ModeKeys;
  setTime: (time: number) => void;
  setTimeUntilBreak: (time: number) => void;
  setTimeLeft: (timeLeft: number) => void;
  setMode: (mode: ModeKeys) => void;
}

const todayKey = formatISO(startOfDay(new Date()), { representation: 'date' });
const keyPrefix = `@${todayKey}`;

export const timeKey = `@${todayKey}-time`;

const persistState = (key: string, value: any) => {
  storage.persist({ key, value });
  return value;
};

export const usePomodoroStore = create<IPomodoroStore>((set) => ({
  time: storage.getNumber({ key: `${keyPrefix}-time` }) ?? 0,
  timeUntilBreak: modes['drive'].duration,
  timeLeft: modes['drive'].duration,
  mode: 'drive',

  setTime: (time) =>
    set(() => ({ time: persistState(`${keyPrefix}-time`, time) })),
  setTimeUntilBreak: (time) =>
    set((state) => ({ ...state, timeUntilBreak: time })),
  setTimeLeft: (timeLeft) => set((state) => ({ ...state, timeLeft: timeLeft })),
  setMode: (mode) => set((state) => ({ ...state, mode: mode })),
}));
