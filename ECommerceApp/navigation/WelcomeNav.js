import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import AppNavigator from './AppNavigator';
import routes from './routes';
import {StatusBar} from 'react-native';
const Stack = createNativeStackNavigator();

const WelcomeNav = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.SplashScreen}
      component={SplashScreen}
      options={{headerShown: false}}
    />

    <Stack.Screen
      name={routes.AppScreen}
      component={AppNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default WelcomeNav;
