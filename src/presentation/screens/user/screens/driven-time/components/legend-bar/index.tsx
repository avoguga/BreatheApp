import { LegendsContainer } from '../../styles';
import { LegendItem } from '../../time-chart/components/legend';
import { TimeChartProps } from '../../time-chart/types';

export const LegendBar: React.FC<TimeChartProps> = ({ pieData }) => {
  return (
    <LegendsContainer>
      {pieData.map((data) => (
        <LegendItem
          key={`${data.label}-${data.color}`}
          color={data.color}
          label={data.label}
        />
      ))}
    </LegendsContainer>
  );
};
