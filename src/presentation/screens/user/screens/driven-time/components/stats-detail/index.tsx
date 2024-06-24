import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import { StatsContainer, StatText } from '../../styles';
import { StatsDetailsProps } from '../../time-chart/types';

export const StatsDetails: React.FC<StatsDetailsProps> = ({
  data,
  pieData,
}) => {
  const parseToFloat = (time: number) => parseFloat(time.toFixed(1));

  const formatPlural = (value: number, singular: string, plural: string) => {
    return value.toFixed(1) === '1.0' ? singular : plural;
  };

  return (
    <StatsContainer>
      <StatText color="#000" style={{ fontFamily: fonts.bold, fontSize: 16 }}>
        Médias
      </StatText>
      {pieData.map((item, index) => (
        <StatText key={index} color={colors.primary.textColor}>
          {item.label}: {item.value.toFixed(2)} horas
        </StatText>
      ))}
      <StatText
        color="#000"
        style={{ fontFamily: fonts.bold, fontSize: 16, marginTop: 16 }}
      >
        Trabalhou:
      </StatText>
      <StatText color="#000">{data.daysWorked} dias</StatText>
      <StatText color="#000">
        {parseToFloat(data.weeksWorked)}{' '}
        {formatPlural(data.weeksWorked, 'semana', 'semanas')}
      </StatText>
      <StatText color="#000">
        {parseToFloat(data.monthsWorked)}{' '}
        {formatPlural(data.monthsWorked, 'mês', 'meses')}
      </StatText>
    </StatsContainer>
  );
};
