import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const AnimatedContainer = styled(Animated.View)`
  margin-top: 16px;
  background-color: ${colors.secondary.backgroundColor};
  overflow: hidden;
  border-width: 1px;
  border-color: ${colors.tertiary.backgroundColor};
  border-radius: 12px;
  padding-horizontal: 16px;
`;

export const AccordionTitle = styled.Text`
  font-family: ${fonts.semibold};
  font-size: 16px;
`;

export const RowView = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const InfoContainer = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 16px;
`;

export const FlexView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const DetailView = styled.View`
  background-color: ${colors.primary.backgroundColor};
  padding-left: 0px;
  padding-vertical: 0px;
  margin-bottom: 16px;
`;

export const OptionContainer = styled.View<{ selected: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({ selected }) =>
    selected ? colors.primary.backgroundColor : 'transparent'};
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const OptionText = styled.Text<{ selected: boolean }>`
  font-family: ${fonts.regular};
  font-size: 16px;
  color: ${({ selected }) =>
    selected ? colors.secondary.textColor : colors.primary.textColor};
`;

export const SelectedIcon = styled.View`
  margin-left: auto;
`;
