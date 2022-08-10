import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderCard from '../components/OrderCard';
import Orders from '../screens/Orderslist';
import routes from './routes';

const Stack = createNativeStackNavigator();
const OrderNavgigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.OrdersList} component={Orders} />
      <Stack.Screen name={routes.OrderDetails} component={OrderCard} />
    </Stack.Navigator>
  );
};

export default OrderNavgigator;
