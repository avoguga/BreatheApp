import { useLanguageStore } from '@/infra/language';
import { useEffect, useState } from 'react';
import { AveragesAndWorkTime, PieDataItem } from '../time-chart/types';
import { fetchTimeData } from '../time-chart/utils';
import strings from './utils/strings';

export const useDrivenTime = () => {
  const language = useLanguageStore((state) => state.language);

  const [data, setData] = useState<AveragesAndWorkTime>({
    dailyAverage: 0,
    weeklyAverage: 0,
    monthlyAverage: 0,
    daysWorked: 0,
    weeksWorked: 0,
    monthsWorked: 0,
  });

  const pieData: PieDataItem[] = [
    {
      value: data.dailyAverage,
      color: '#E5BE00',
      label: strings[language].dailyAverage,
    },
    {
      value: data.weeklyAverage,
      color: '#89CFF0',
      label: strings[language].weeklyAverage,
    },
    {
      value: data.monthlyAverage,
      color: '#4682B4',
      label: strings[language].monthlyAverage,
    },
  ];

  useEffect(() => {
    fetchTimeData().then(setData).catch(console.error);
  }, []);

  return { pieData, data };
};
