import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home';
import Category from '../screens/Category';
const Tab = createBottomTabNavigator();

const Footer = () => (
  <Tab.Navigator 
  screenOptions={{
    tabBarActiveTintColor:'black',
    // headerShown:false
  }}>
   
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused,color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    
    <Tab.Screen
      name="Category"
      component={Category}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialIcons
            name="category"
            color={color}
            size={size}
          />
        ),
      }}
    />

    <Tab.Screen
      name="Settings"
      component={Category}
      options={{
        tabBarIcon: ({color, size}) => (
          <AntDesign
            name="setting"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Footer;
