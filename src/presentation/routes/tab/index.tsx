import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import DrivingTimeSelector from '@/presentation/screens/driving-time-selector';
import { ForumScreen } from '@/presentation/screens/forum';
import { Home } from '@/presentation/screens/home';
import { User } from '@/presentation/screens/user';
import { Feather, Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const TabBarLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text style={{ fontSize: 12, fontFamily: fonts.semibold }}>{children}</Text>
  );
};
export const BottomTabNavigation = () => (
  <Tab.Navigator
    barStyle={{
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 64,
      borderTopWidth: 0.5,
    }}
    shifting
    sceneAnimationEnabled
    sceneAnimationType="shifting"
  >
    <Tab.Screen
      name="Home"
      options={{
        tabBarLabel: (<TabBarLabel>Home</TabBarLabel>) as unknown as string,
        tabBarIcon: ({ focused }) => (
          <Feather
            name="home"
            size={32}
            color={focused ? colors.primary.textColor : 'gray'}
          />
        ),
      }}
      component={Home}
    />
    <Tab.Screen
      name="DrivingTimeSelector"
      options={{
        tabBarLabel: (<TabBarLabel>Dirigir</TabBarLabel>) as unknown as string,
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="car"
            size={32}
            color={focused ? colors.primary.textColor : 'gray'}
          />
        ),
      }}
      component={DrivingTimeSelector}
    />
    <Tab.Screen
      name="ForumScreen"
      options={{
        tabBarLabel: (<TabBarLabel>Posts</TabBarLabel>) as unknown as string,
        tabBarIcon: ({ focused }) => (
          <Feather
            name="plus-square"
            size={32}
            color={focused ? colors.primary.textColor : 'gray'}
          />
        ),
      }}
      component={ForumScreen}
    />
    <Tab.Screen
      name="User"
      options={{
        tabBarLabel: (<TabBarLabel>Usuário</TabBarLabel>) as unknown as string,
        tabBarIcon: ({ focused }) => (
          <Feather
            name="user"
            size={32}
            color={focused ? colors.primary.textColor : 'gray'}
          />
        ),
      }}
      component={User}
    />
  </Tab.Navigator>
);
