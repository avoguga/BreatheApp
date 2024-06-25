import { StyleProp, ViewStyle } from 'react-native';

export interface IAccordion {
  accordionTitle?: string;
  data: { label: string; value: string }[];
  collapsable?: boolean;
  style?: StyleProp<ViewStyle>;
  onSelect: (value: string) => void;
  selectedValue: string;
}
