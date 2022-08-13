import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderCard from '../components/OrderCard';
import Orders from '../screens/Orderslist';
import MainOrderDetails from '../screens/MainOrderDetails';
import routes from './routes';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Stack = createNativeStackNavigator();
const OrderNavgigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OrdersList" component={Orders} />
      <Stack.Screen name="OrderDetails" component={MainOrderDetails} />
    </Stack.Navigator>
  );
};

export default OrderNavgigator;
