import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Demo} from './src/screens/Demo';
import {CustomNotification} from './src/customVariants/CustomNotification';
import {interpolate} from 'react-native-reanimated';
import {BellNotify} from './src/screens/BellNotify';
import {BellNotification} from './src/customVariants/BellNotification';
import {
  createNotifications,
  generateAnimationConfig,
  SlideInLeftSlideOutRight,
} from 'react-native-notificated';

const Drawer = createDrawerNavigator();

export const {NotificationsProvider, notify} = createNotifications({
  duration: 0,
  animationConfig: SlideInLeftSlideOutRight,
  variants: {
    bellNotification: {
      component: BellNotification,
    },
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <NotificationsProvider />
      <Drawer.Navigator
        initialRouteName="Demo"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Demo" component={Demo} />
        <Drawer.Screen name="Bell" component={BellNotify} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
