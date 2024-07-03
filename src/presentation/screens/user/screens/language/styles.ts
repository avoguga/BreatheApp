import { colors } from "@/presentation/constants/colors";
import { fonts } from "@/presentation/constants/fonts";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${colors.secondary.backgroundColor};
`;

export const ItemContainer = styled.View`
  background-color: ${colors.secondary.textColor};
  padding: 20px;
  border-radius: 10px;
  border-width: 0.5px;
`;

export const NotificationText = styled.Text`
  font-size: 18px;
  color: ${colors.primary.textColor};
  font-family: ${fonts.bold};
`;

export const Separator = styled.View`
  height: 1px;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.regular};
  font-size: 16px;
`;
