import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Category from '../screens/Category';
import colors from '../config/colors';
const Tab = createMaterialBottomTabNavigator();

const Footer = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={colors.black}
    inactiveColor={colors.medium}
    shifting
    barStyle={{backgroundColor: colors.white}}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Category"
      component={Category}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons name="category" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Me"
      component={Category}
      options={{
        tabBarIcon: ({color, size}) => (
          <AntDesign name="user" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Footer;
