import { FlatList } from 'react-native';
import { IHorizontalListData } from './types';

export const HorizontalList = ({ ...props }: IHorizontalListData) => {
  return (
    <FlatList
      {...props}
      horizontal
      scrollEnabled
      contentContainerStyle={{
        paddingHorizontal: 16,
        gap: 8,
        alignSelf: 'flex-start',
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};
