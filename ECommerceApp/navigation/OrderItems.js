import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Address from '../screens/Address';
import NewAddress from '../screens/NewAddress';
import MoreOrderDetails from '../components/MoreOrderDetailsCom';

const Stack = createNativeStackNavigator();
const OrderItems = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MoreOrderDetails" component={MoreOrderDetails} />
    </Stack.Navigator>
  );
};

export default OrderItems;
