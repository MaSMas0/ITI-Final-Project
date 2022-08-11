import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ProfileNavigator from './ProfileNavigator';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.LogIn}
      component={SignIn}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={routes.LogOut}
      component={SignUp}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={routes.profile}
      component={ProfileNavigator}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
