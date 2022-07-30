import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      // options={{headerShown: false}}
    />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default AuthNavigator;
