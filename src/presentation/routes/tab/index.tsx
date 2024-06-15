import { Home } from '@/presentation/screens/home';
import { Splash } from '@/presentation/screens/splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarComponent } from './components/tab-bar';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      unmountOnBlur: true,
    }}
    tabBar={(props) => <TabBarComponent {...props} />}
  >
    <Tab.Screen name="Splash" component={Splash} />
    <Tab.Screen name="Home" component={Home} />
  </Tab.Navigator>
);
