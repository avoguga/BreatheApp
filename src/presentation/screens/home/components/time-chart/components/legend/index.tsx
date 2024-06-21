import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import { Text, View } from 'react-native';

export const LegendItem = ({
  color,
  label,
}: {
  color: string;
  label: string;
}) => (
  <View
    style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}
  >
    <View
      style={{
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: color,
        marginRight: 8,
      }}
    />
    <Text
      style={{
        fontSize: 14,
        fontFamily: fonts.regular,
        color: colors.primary.textColor,
      }}
    >
      {label}
    </Text>
  </View>
);
