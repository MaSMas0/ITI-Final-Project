import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Address from '../screens/Address';
import NewAddress from '../screens/NewAddress';

const Stack = createStackNavigator();

const AddressNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="Messages" component={NewAddress} />
  </Stack.Navigator>
);

export default AddressNavigator;
