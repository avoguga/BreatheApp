import { colors } from '@/presentation/constants/colors';
import { Feather } from '@expo/vector-icons';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import TabContainer from '../tab-container';

export const TabBarComponent: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => (
  <TabContainer variant="bottom">
    {state.routes.map((route, index) => {
      const { options } = descriptors[route.key];
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate({ name: route.name, merge: true } as never);
        }
      };

      const onLongPress = () => {
        navigation.emit({
          type: 'tabLongPress',
          target: route.key,
        });
      };

      return (
        <TouchableOpacity
          key={route.key}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{
            flex: 1,
            alignItems: 'center',
            borderColor: '#24282F',
            justifyContent: 'center',
            borderRadius: 1000,
            backgroundColor: '#24282F',
          }}
        >
          <Feather
            stroke={isFocused ? colors.primary.textColor : '#fff'}
            width={28}
            height={28}
            name="alert-circle"
          />
        </TouchableOpacity>
      );
    })}
  </TabContainer>
);
