import { StatsContainer, StatText } from '../../styles';
import { StatsDetailsProps } from '../../time-chart/types';

export const StatsDetails: React.FC<StatsDetailsProps> = ({
  data,
  pieData,
}) => {
  return (
    <StatsContainer>
      {pieData.map((item, index) => (
        <StatText key={index} color={item.color}>
          {item.label}: {item.value.toFixed(2)} horas
        </StatText>
      ))}
      <StatText color="#000">Dias trabalhados: {data.daysWorked}</StatText>
      <StatText color="#000">
        Semanas trabalhadas: {data.weeksWorked.toFixed(1)}
      </StatText>
      <StatText color="#000">
        Meses trabalhados: {data.monthsWorked.toFixed(1)}
      </StatText>
    </StatsContainer>
  );
};
