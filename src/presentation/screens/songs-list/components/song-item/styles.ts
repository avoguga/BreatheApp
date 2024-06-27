import { colors } from "@/presentation/constants/colors";
import { fonts } from "@/presentation/constants/fonts";
import styled from "styled-components/native";

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin: 8px;
  background-color: #fff;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
`;

export const ItemInfo = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  font-family: ${fonts.bold};
`;

export const PlayerButton = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 50px;
  background-color: ${colors.primary.backgroundColor};
  align-items: center;
  justify-content: center;
`;

export const ProgressBar = styled.View`
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-top: 8px;
  overflow: hidden;
`;

export const Progress = styled.View`
  height: 100%;
  background-color: ${colors.primary.backgroundColor};
  border-radius: 4px;
  width: 0;
  transition: width 0.3s ease-in-out;
`;
