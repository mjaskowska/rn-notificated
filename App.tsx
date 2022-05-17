import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Demo} from './src/screens/Demo';
import {CustomNotification} from './src/customVariants/CustomNotification';

const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Demo"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Demo" component={Demo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

export const helper = {
  // export const {NotificationsProvider, notify} = createNotifications({
  //   isNotch: true,
  //   duration: 1000,
  //   notificationPosition: 'top',
  //   animationConfig: MyAnimation,
  //   // defaultStylesSettings: {
  //   //   globalConfig: {
  //   //     defaultIconType: 'monochromatic',
  //   //     borderType: 'accent',
  //   //   },
  //   //   successConfig: {
  //   //     bgColor: 'limegreen',
  //   //     accentColor: 'limegreen',
  //   //     titleColor: 'white',
  //   //     descriptionColor: 'white',
  //   //     borderRadius: 2,
  //   //   },
  //   // },
  //   variants: {
  //     customEvent: {
  //       component: SuccessNotification,
  //     }
  //   }
  // });
  // const CustomAnimationAdvanced = generateAnimationConfig({
  //   animationConfigIn: {
  //     type: 'timing',
  //     config: {
  //       duration: 5000,
  //     },
  //   },
  //   transitionInStyles: progress => {
  //     'worklet';
  //     const translateX = interpolate(progress.value, [0, 0.5, 1], [0, 50, 0]);
  //     const translateY = interpolate(
  //       progress.value,
  //       [0, 0.25, 0.5, 0.8, 1],
  //       [900, 0, 200, 100, 0],
  //     );
  //     const rotateZ = interpolate(progress.value, [0, 0.5, 1], [-20, -20, 0]);
  //     const rotateY = interpolate(progress.value, [0, 1], [200, 20]);
  //     const rotateX = interpolate(progress.value, [0, 1], [-200, 0]);
  //     return {
  //       scale: progress.value,
  //       opacity: progress.value * 1.5,
  //       transform: [
  //         {translateY},
  //         {translateX},
  //         {perspective: 2500},
  //         {rotateZ: `${rotateZ}deg`},
  //         {rotateY: `${rotateY}deg`},
  //         {rotateX: `${rotateX}deg`},
  //       ],
  //     };
  //   },
  // });
  // const CustomAnimationSimplified = generateAnimationConfig({
  //   animationConfigIn: {
  //     type: 'timing',
  //     config: {
  //       duration: 2000,
  //     },
  //   },
  //   transitionInStyles: progress => {
  //     'worklet';
  //     const translateX = interpolate(progress.value, [0, 0.25, 0.5, 0.75, 1], [200, 100, 80, 130, 0]);
  //     const translateY = interpolate(progress.value, [0, 1], [-100, 0]);
  //     return {
  //       opacity: progress.value,
  //       scale: progress.value,
  //       transform: [{translateY}, {translateX}],
  //     };
  //   },
  // });
};
