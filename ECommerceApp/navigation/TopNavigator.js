import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StyleSheet, View} from 'react-native';
import Product from '../screens/ProductList';
import WishList from '../screens/WishList';
import MoreOrderDetails from '../components/MoreOrderDetailsCom';

const TopNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName="WishList">
      <Tab.Screen name="WishList" component={WishList} />
      <Tab.Screen name="Orders" component={MoreOrderDetails} />
    </Tab.Navigator>
  );
};

export default TopNavigator;
