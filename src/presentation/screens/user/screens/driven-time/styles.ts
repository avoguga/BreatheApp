import { fonts } from '@/presentation/constants/fonts';
import { PieChart } from 'react-native-gifted-charts';
import styled from 'styled-components/native';

export const StyledPieChart = styled(PieChart)``;

export const CenterLabel = styled.Text`
  font-size: 18px;
  font-family: ${fonts.regular};
`;

export const StatsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const StatText = styled.Text<{ color: string }>`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${({ color }) => color};
  margin-vertical: 4px;
`;

export const LegendsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 16px;
  flex-wrap: wrap;
  padding: 8px;
`;
