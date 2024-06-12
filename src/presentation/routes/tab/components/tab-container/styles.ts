import { styled } from "styled-components/native";
import type { IContainer } from "./interface";
import colors from "@/global/colors";

export const Container = styled.View<Pick<IContainer, "variant">>`
  height: 60px;
  align-items: center;
  justify-content: "center";
  flex-direction: row;
  background-color: #24282f;
  ${({ variant }) =>
    variant === "top"
      ? `gap : 8px; background-color: ${colors.primaryBackground}`
      : ""}
`;
