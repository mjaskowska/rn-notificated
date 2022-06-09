import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Demo} from './src/screens/Demo';
import {CustomNotification} from './src/customVariants/CustomNotification';
import {interpolate} from 'react-native-reanimated';

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
