import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Category from '../screens/Category';
import Header from '../components/Header';
import colors from '../config/colors';
const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{headerTitle: props => <Header title={'Home'} {...props} />}}
      />
    </Stack.Navigator>
  );
}
function CategoryStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen
        name="CategoryStack"
        component={Category}
        options={{
          headerTitle: props => <Header title={'Category'} {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}
function SettingsStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
const Footer = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={colors.black}
    inactiveColor={colors.medium}
    shifting
    barStyle={{backgroundColor: colors.white}}>
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Category"
      component={CategoryStackScreen}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="category" color={color} size={25} />
        ),
      }}
    />

    <Tab.Screen
      name="Me"
      component={SettingsStackScreen}
      options={{
        tabBarIcon: ({color}) => (
          <AntDesign name="user" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Footer;
