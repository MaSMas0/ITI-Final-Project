import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderList from '../screens/Orderslist';
import OrderDetails from '../screens/OrderDetails';
const Stack = createNativeStackNavigator();
const OrderNavgigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OrdersList" component={OrderList} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default OrderNavgigator;
