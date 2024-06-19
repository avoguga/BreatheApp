import { SessionOption } from '../driving-time-selector';
import { ModeConfig } from './components/timer/types';

export const mapSessionToModes = (
  session: SessionOption
): Record<string, ModeConfig> => {
  return {
    drive: {
      next: 'shortBreak',
      duration: session.work,
    },
    shortBreak: {
      next: 'drive',
      duration: session.rest,
    },
    longBreak: {
      next: 'drive',
      duration: 15 * 60,
    },
  };
};
