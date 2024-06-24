import { storage } from '@/infra/storage';
import { Averages, WorkedTime } from './types';

const calculateAverages = (timeData: number[]): Averages => {
  const totalDays = timeData.length;
  if (totalDays === 0) {
    return { dailyAverage: 0, weeklyAverage: 0, monthlyAverage: 0 };
  }
  const totalSeconds = timeData.reduce((acc, time) => acc + time, 0);
  const dailyAverage = totalSeconds / totalDays / 3600;
  const weeklyAverage = dailyAverage / 7;
  const monthlyAverage = dailyAverage / 30;

  return {
    dailyAverage,
    weeklyAverage,
    monthlyAverage,
  };
};

const calculateWorkedTime = (days: number): WorkedTime => {
  return {
    daysWorked: days,
    weeksWorked: days / 7,
    monthsWorked: days / 30,
  };
};

export const fetchTimeData = async (): Promise<Averages & WorkedTime> => {
  const allKeys = storage.getAllKeys();
  const timeKeys = allKeys.filter((key) => key.endsWith('-time'));

  const timeData = await Promise.all(
    timeKeys.map(async (key) => {
      return storage.getNumber({ key }) ?? 0;
    })
  );

  const averages = calculateAverages(timeData);
  const workedTime = calculateWorkedTime(timeData.length);

  return {
    ...averages,
    ...workedTime,
  };
};
