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
export const breakKey = `@${todayKey}-break`;
export const timeLeftKey = `@${todayKey}-timeLeft`;
export const modeKey = `@${todayKey}-mode`;

const persistState = (key: string, value: any) => {
  storage.persist({ key, value });
  return value;
};

export const usePomodoroStore = create<IPomodoroStore>((set) => ({
  time: storage.getNumber({ key: `${keyPrefix}-time` }) ?? 0,
  timeUntilBreak:
    storage.getNumber({ key: `${keyPrefix}-break` }) ?? modes['drive'].duration,
  timeLeft:
    storage.getNumber({ key: `${keyPrefix}-timeLeft` }) ??
    modes['drive'].duration,
  mode:
    (storage.getString({ key: `${keyPrefix}-mode` }) as ModeKeys) || 'drive',

  setTime: (time) =>
    set(() => ({ time: persistState(`${keyPrefix}-time`, time) })),
  setTimeUntilBreak: (time) =>
    set(() => ({ timeUntilBreak: persistState(`${keyPrefix}-break`, time) })),
  setTimeLeft: (timeLeft) =>
    set(() => ({ timeLeft: persistState(`${keyPrefix}-timeLeft`, timeLeft) })),
  setMode: (mode) =>
    set(() => ({ mode: persistState(`${keyPrefix}-mode`, mode) })),
}));
