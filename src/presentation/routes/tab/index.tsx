import { useLanguageStore } from '@/infra/language';
import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import DrivingTimeSelector from '@/presentation/screens/driving-time-selector';
import { ForumScreen } from '@/presentation/screens/forum';
import { Home } from '@/presentation/screens/home';
import { User } from '@/presentation/screens/user';
import { Feather, Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import strings from './utils/strings';

const Tab = createMaterialBottomTabNavigator();

const TabBarLabel = ({ children }: { children: React.ReactNode }) => {
  return <Text style={styles.tabBarLabel}>{children}</Text>;
};

const TabBarIcon = ({
  name,
  focused,
  library,
}: {
  name: any;
  focused: boolean;
  library: 'Feather' | 'Ionicons';
}) => {
  const IconComponent = library === 'Feather' ? Feather : Ionicons;
  return (
    <View style={styles.iconWrapper}>
      <IconComponent
        name={name}
        size={24}
        color={focused ? colors.primary.textColor : 'gray'}
      />
    </View>
  );
};

export const BottomTabNavigation = () => {
  const language = useLanguageStore((state) => state.language);

  return (
    <Tab.Navigator
      barStyle={styles.barStyle}
      shifting={true}
      sceneAnimationEnabled={true}
      sceneAnimationType="shifting"
      activeIndicatorStyle={styles.indicatorStyle}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: (
            <TabBarLabel>{strings[language].home}</TabBarLabel>
          ) as unknown as string,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" focused={focused} library="Feather" />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="DrivingTimeSelector"
        options={{
          tabBarLabel: (
            <TabBarLabel>{strings[language].drive}</TabBarLabel>
          ) as unknown as string,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="car" focused={focused} library="Ionicons" />
          ),
        }}
        component={DrivingTimeSelector}
      />
      <Tab.Screen
        name="ForumScreen"
        options={{
          tabBarLabel: (
            <TabBarLabel>{strings[language].posts}</TabBarLabel>
          ) as unknown as string,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="plus-square"
              focused={focused}
              library="Feather"
            />
          ),
        }}
        component={ForumScreen}
      />
      <Tab.Screen
        name="User"
        options={{
          tabBarLabel: (
            <TabBarLabel>{strings[language].user}</TabBarLabel>
          ) as unknown as string,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="user" focused={focused} library="Feather" />
          ),
        }}
        component={User}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.3,
    borderColor: '#9e9d94',
    backgroundColor: colors.secondary.backgroundColor,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tabBarLabel: {
    fontSize: 12,
    fontFamily: fonts.semibold,
    color: colors.primary.textColor,
  },
  iconWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 24,
  },
});
