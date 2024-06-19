import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 22px;
  color: ${colors.primary.textColor};
  font-family: ${fonts.semibold};
  margin-bottom: 20px;
  text-align: left;
`;

export const SubTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f0f0f0;
  padding: 12px 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  elevation: 3;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${colors.primary.textColor};
  margin-left: 8px;
  font-family: ${fonts.regular};
`;

export const OptionsContainer = styled.View`
  flex: 1;
  margin-top: 8px;
`;

export const SessionOption = styled.TouchableOpacity<{ selected: boolean }>`
  padding: 12px 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.selected ? '#44845E' : '#DDD')};
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.selected ? '#E8F5E9' : '#FFF')};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 3;
`;

export const OptionText = styled.Text`
  color: ${colors.primary.textColor};
  font-size: 16px;
  text-align: center;
  flex: 1;
  font-family: ${fonts.regular};
`;

export const MainButton = styled.TouchableOpacity`
  height: 45px;
  background-color: #4caf50;
  justify-content: center;
  align-items: center;
`;

export const MainButtonText = styled.Text`
  font-family: ${fonts.semibold};
  color: #fff;
`;
