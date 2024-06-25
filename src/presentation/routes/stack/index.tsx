import { useAuth } from '@/contexts/auth-provider';
import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import { DriverTips } from '@/presentation/screens/driver-tips';
import {
  DrivingTimeSelector,
  SessionOption,
} from '@/presentation/screens/driving-time-selector';
import { ForgotPassword } from '@/presentation/screens/forgot-password';
import { Tip } from '@/presentation/screens/home/components/tips';
import { Login } from '@/presentation/screens/login';
import { Onboarding } from '@/presentation/screens/onboarding';
import { Pomodoro } from '@/presentation/screens/pomodoro';
import { Register } from '@/presentation/screens/register';
import { SongsList } from '@/presentation/screens/songs-list';
import { Splash } from '@/presentation/screens/splash';
import { DrivenTime } from '@/presentation/screens/user/screens/driven-time';
import { History } from '@/presentation/screens/user/screens/history';
import { Settings } from '@/presentation/screens/user/screens/settings';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BottomTabNavigation } from '../tab';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  HomeTabs: undefined;
  DrivingTimeSelector: undefined;
  DrivenTime: undefined;
  History: undefined;
  Settings: undefined;
  Pomodoro: { session: SessionOption };
  DriverTips: {
    tip: Tip;
  };
  SongsList: {
    musicType: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontFamily: fonts.bold,
          fontSize: 24,
          marginTop: 3,
        },
      }}
      initialRouteName="HomeTabs"
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      {currentUser && (
        <>
          <Stack.Screen
            name="HomeTabs"
            component={BottomTabNavigation}
            options={{
              headerShown: true,
              title: 'Home',
              headerLeft: () => null,
            }}
          />
          <Stack.Screen
            name="DrivingTimeSelector"
            options={{
              headerShown: true,
              title: 'Sessões de condução',
              headerBackImage: () => (
                <Feather
                  name="chevron-left"
                  size={32}
                  color={colors.primary.textColor}
                />
              ),
            }}
            component={DrivingTimeSelector}
          />
          <Stack.Screen name="Pomodoro" component={Pomodoro} />
          <Stack.Screen
            name="DrivenTime"
            component={DrivenTime}
            options={{
              headerShown: true,
              title: '',
              headerBackImage: () => <Feather name="chevron-left" size={32} />,
            }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{
              headerShown: true,
              title: '',
              headerBackImage: () => <Feather name="chevron-left" size={32} />,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: true,
              title: '',
              headerBackImage: () => <Feather name="chevron-left" size={32} />,
            }}
          />
          <Stack.Screen name="DriverTips" component={DriverTips} />
          <Stack.Screen
            name="SongsList"
            component={SongsList}
            options={{
              headerShown: true,
              title: '',
              headerBackImage: () => (
                <Feather
                  name="chevron-left"
                  size={32}
                  color={colors.secondary.backgroundColor}
                />
              ),
              headerStyle: {
                backgroundColor: colors.tertiary.backgroundColor,
              },
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
