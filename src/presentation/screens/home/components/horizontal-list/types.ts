import { FlatListProps } from 'react-native';

type DataProps = {
  uri: string;
  title: string;
};
export interface IHorizontalListData extends FlatListProps<DataProps> {
  data: Array<DataProps>;
}
