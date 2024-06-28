import { useLanguageStore } from '@/infra/language';
import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import React from 'react';
import { StatsContainer, StatText } from '../../styles';
import { StatsDetailsProps } from '../../time-chart/types';
import strings from './utils/strings';

export const StatsDetails: React.FC<StatsDetailsProps> = ({
  data,
  pieData,
}) => {
  const language = useLanguageStore((state) => state.language);

  const parseToFloat = (time: number) => parseFloat(time.toFixed(1));

  const formatPlural = (value: number, singular: string, plural: string) => {
    return value.toFixed(1) === '1.0' ? singular : plural;
  };

  return (
    <StatsContainer>
      <StatText color="#000" style={{ fontFamily: fonts.bold, fontSize: 16 }}>
        {strings[language].averages}
      </StatText>
      {pieData.map((item, index) => (
        <StatText key={index} color={colors.primary.textColor}>
          {item.label}: {item.value.toFixed(2)} {strings[language].hours}
        </StatText>
      ))}
      <StatText
        color="#000"
        style={{ fontFamily: fonts.bold, fontSize: 16, marginTop: 16 }}
      >
        {strings[language].worked}:
      </StatText>
      <StatText color="#000">
        {data.daysWorked} {strings[language].days}
      </StatText>
      <StatText color="#000">
        {parseToFloat(data.weeksWorked)}{' '}
        {formatPlural(
          data.weeksWorked,
          strings[language].weekSingular,
          strings[language].weekPlural
        )}
      </StatText>
      <StatText color="#000">
        {parseToFloat(data.monthsWorked)}{' '}
        {formatPlural(
          data.monthsWorked,
          strings[language].monthSingular,
          strings[language].monthPlural
        )}
      </StatText>
    </StatsContainer>
  );
};
