import { useEffect, useState } from 'react';
import { AveragesAndWorkTime, PieDataItem } from '../time-chart/types';
import { fetchTimeData } from '../time-chart/utils';

export const useDrivenTime = () => {
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
      color: '#336665',
      label: 'Média diária',
    },
    {
      value: data.weeklyAverage,
      color: '#338685',
      label: 'Média semanal',
    },
    {
      value: data.monthlyAverage,
      color: '#507580',
      label: 'Média mensal',
    },
  ];

  useEffect(() => {
    fetchTimeData().then(setData).catch(console.error);
  }, []);

  return { pieData, data };
};
