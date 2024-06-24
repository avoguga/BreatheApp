export type Averages = {
  dailyAverage: number;
  weeklyAverage: number;
  monthlyAverage: number;
};

export type DailyDriveTime = {
  date: string;
  timeInSeconds: number;
};

export interface DailyDriveTimes {
  dailyTimes: DailyDriveTime[];
}

export type WorkedTime = {
  daysWorked: number;
  weeksWorked: number;
  monthsWorked: number;
};

export type AveragesAndWorkTime = Averages & WorkedTime;

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
