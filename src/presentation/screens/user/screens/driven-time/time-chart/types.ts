export type Averages = {
  dailyAverage: number;
  weeklyAverage: number;
  monthlyAverage: number;
};

export type WorkedTime = {
  daysWorked: number;
  weeksWorked: number;
  monthsWorked: number;
};

export type AveragesAndWorkTime = {
  dailyAverage: number;
  weeklyAverage: number;
  monthlyAverage: number;
  daysWorked: number;
  weeksWorked: number;
  monthsWorked: number;
};

export type PieDataItem = {
  value: number;
  color: string;
  label: string;
};

export interface TimeChartProps {
  pieData: PieDataItem[];
}

export interface StatsDetailsProps extends TimeChartProps {
  data: AveragesAndWorkTime;
}
