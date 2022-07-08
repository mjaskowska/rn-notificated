import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Demo} from './src/screens/Demo';
import {CustomNotification} from './src/customVariants/CustomNotification';
import {interpolate} from 'react-native-reanimated';
import {
  createNotifications,
  generateAnimationConfig,
} from 'react-native-notificated';
import {BottomSheet} from './src/customVariants/BottomSheet';
import {InfoModal} from './src/customVariants/InfoModal';

const Drawer = createDrawerNavigator();

export const slideWithJump = generateAnimationConfig({
  animationConfigIn: {
    type: 'timing',
    config: {
      duration: 150,
    },
  },
  transitionInStyles: progress => {
    'worklet';
    const translateY = interpolate(progress.value, [0, 0.3, 1], [100, 70, 0]);
    const opacity = interpolate(progress.value, [0, 0.2, 1], [0, 0.8, 1]);
    return {
      transform: [{translateY}],
      opacity,
    };
  },
});

export const slideSideWithJump = generateAnimationConfig({
  animationConfigIn: {
    type: 'timing',
    config: {
      duration: 200,
    },
  },
  transitionInStyles: progress => {
    'worklet';

    const translateX = interpolate(progress.value, [0, 0.8, 1], [200, -20, 0]);
    const opacity = interpolate(progress.value, [0, 0.2, 1], [0, 1, 1]);
    return {
      transform: [{translateX}],
      opacity,
    };
  },
});

export const {NotificationsProvider, notify} = createNotifications({
  duration: 0,
  variants: {
    bottomSheet: {
      component: BottomSheet,
    },
    info: {
      component: InfoModal,
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
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
