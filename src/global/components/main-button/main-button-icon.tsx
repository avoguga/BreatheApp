import { IconType, MainButtonProps } from "./types";
import { Feather } from "@expo/vector-icons";

export const MainButtonIcon = ({...props}: IconType) => (
  <Feather {...props}/>
);
