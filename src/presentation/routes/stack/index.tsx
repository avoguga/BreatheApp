import { Splash } from '@/presentation/screens/splash';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from '../tab';

const Stack = createStackNavigator();

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="HomeTabs" component={BottomTabNavigation} />
  </Stack.Navigator>
);
