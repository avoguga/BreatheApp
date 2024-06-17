import { modes } from '../utils';

export type ModeKeys = keyof typeof modes;

export interface CircularProgressProps {
  size: number;
  backgroundColor: string;
  tintColor: string;
}

export interface ModeConfig {
  next: ModeKeys;
  duration: number;
}
