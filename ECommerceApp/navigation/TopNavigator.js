import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WishList from '../screens/WishList';
import routes from './routes';
import OrderNavgigator from './OrderNavigator';

const TopNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.WishLists} component={WishList} />
      <Tab.Screen name={routes.Orders} component={OrderNavgigator} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
