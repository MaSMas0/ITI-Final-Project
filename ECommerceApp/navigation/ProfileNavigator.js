import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import routes from './routes';

const Stack = createNativeStackNavigator();

function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.Settings}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.AuthScreens}
        component={AuthNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default ProfileNavigator;
