import { MainButtonProps } from "./types";
import { ButtonText } from "./styles";

export const MainButtonText = ({
  children,
  ...props
}: MainButtonProps["Text"] & { children: React.ReactNode }) => (
  <ButtonText {...props}>{children}</ButtonText>
);
