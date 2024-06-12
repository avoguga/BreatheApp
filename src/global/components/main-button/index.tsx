import { MainButtonIcon } from "./main-button-icon";
import { MainButtonText } from "./main-button-text";
import { IconView, StyledButton } from "./styles";
import { MainButtonProps } from "./types";

const MainButton = ({ children, ...props }: MainButtonProps) => (
  <StyledButton {...props}>{children}</StyledButton>
);

MainButton.IconView = IconView;
MainButton.Icon = MainButtonIcon;
MainButton.Text = MainButtonText;

export { MainButton };
