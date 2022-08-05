import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Address from '../screens/Address';
import NewAddress from '../screens/NewAddress';

const Stack = createNativeStackNavigator();

const AddressNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SavedAddress" component={Address} />
    <Stack.Screen name="NewAddress" component={NewAddress} />
  </Stack.Navigator>
);

export default AddressNavigator;
