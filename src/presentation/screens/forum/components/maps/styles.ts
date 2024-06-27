import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const PaddingView = styled.View`
  padding: 8px;
`;

export const AutocompleteContainer = styled.View`
  flex: 1;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const InputContainer = styled.View`
  border-width: 0.5px;
  background-color: ${colors.secondary.backgroundColor};
  padding-horizontal: 16px;
`;

export const SuggestionsList = styled.View`
  background-color: white;
  border-width: 1px;
  border-color: #ddd;
  width: ${Dimensions.get('window').width}px;
  max-height: 200px;
`;

export const SuggestionText = styled.Text`
  font-family: ${fonts.regular};
  width: 95%;
`;

export const MapContainer = styled(MapView)`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  right: 16px;
  z-index: 10;
  gap: 8px;
  width: 48px;
  height: 48px;
  top: 50%;
`;

export const ResultLocationText = styled.Text`
  color: ${colors.primary.textColor};
  font-size: 16px;
  padding: 8px 16px;
  font-family: ${fonts.semibold};
`;

export const SuggestionTouchable = styled.TouchableOpacity`
  padding-horizontal: 16px;
`;

export const Separator = styled.View`
  border-bottom-width: 0.5px;
`;
