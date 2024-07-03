import { FlatListProps } from "react-native";

type DataProps = {
  uri: string;
  title: string;
  description?: string;
};
export interface IHorizontalListData extends FlatListProps<DataProps> {
  data: Array<DataProps>;
}
