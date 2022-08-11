import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeNavigator from './HomeNavigator';
import CategoryNavigator from './CategoryNavigator';

import colors from '../config/colors';
import Choice from '../screens/Choice';


const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => (

  <Tab.Navigator
    initialRouteName="Home"
    activeColor={colors.blue}
    inactiveColor={colors.lightBlue}
    shifting
    barStyle={{backgroundColor: colors.white}}>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Category"
      component={CategoryNavigator}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="category" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={Choice}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="account-circle" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
