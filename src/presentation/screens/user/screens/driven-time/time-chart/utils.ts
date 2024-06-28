import { storage } from '@/infra/storage';
import { Averages, DailyDriveTimes, WorkedTime } from './types';

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

export const fetchTimeData = async (): Promise<
  Averages & WorkedTime & DailyDriveTimes
> => {
  const allKeys = storage.getAllKeys();
  const timeKeys = allKeys.filter((key) => key.endsWith('-time'));

  const timeData = await Promise.all(
    timeKeys.map(async (key) => {
      return {
        date: key.split('-time')[0].substring(1),
        timeInSeconds: storage.getNumber({ key }) ?? 0,
      };
    })
  );

  const timeInSecondsOnly = timeData.map((data) => data.timeInSeconds);
  const averages = calculateAverages(timeInSecondsOnly);
  const workedTime = calculateWorkedTime(timeData.length);
  const dailyTimes = timeData;

  return {
    ...averages,
    ...workedTime,
    dailyTimes,
  };
};

const strings = {
  en: {
    average: 'Average',
  },
  pt: {
    average: 'Média',
  },
};

export default strings;
