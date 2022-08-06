import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoreOrderDetails from '../components/MoreOrderDetailsCom';
import MoreOrderItemDetails from '../components/MoreOrderItemDetails';

const Stack = createNativeStackNavigator();
const OrderItems = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MoreOrderDetails" component={MoreOrderDetails} />
      <Stack.Screen
        name="MoreOrderItemDetails"
        component={MoreOrderItemDetails}
      />
    </Stack.Navigator>
  );
};

export default OrderItems;
