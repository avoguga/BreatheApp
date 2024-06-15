import { ModeConfig } from './timer/types';

export const modes: Record<string, ModeConfig> = {
  drive: {
    next: 'shortBreak',
    duration: 0.2 * 60,
  },
  shortBreak: {
    next: 'drive',
    duration: 5 * 60,
  },
  longBreak: {
    next: 'drive',
    duration: 15 * 60,
  },
};
