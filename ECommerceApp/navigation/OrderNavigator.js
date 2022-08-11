import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderCard from '../components/OrderCard';
import Orders from '../screens/Orderslist';

const Stack = createNativeStackNavigator();
const OrderNavgigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OrdersList" component={Orders} />
      <Stack.Screen name="MoreOrderItemDetails" component={OrderCard} />
    </Stack.Navigator>
  );
};

export default OrderNavgigator;
