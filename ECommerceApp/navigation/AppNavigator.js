import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import Category from '../screens/Category';
import Product from '../screens/ProductList';

import ProductDetails from '../screens/ProductDetails';

import colors from '../config/colors';
import WishList from '../screens/WishList';

import SearchBar from '../components/SearchBar';
import HeaderRight from '../components/HeaderRight';
import Cart from '../screens/Cart';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Header">
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerTitle: () => <SearchBar title={'Home'} />,
          headerRight: () => (
            <HeaderRight
              wishList={() => {
                navigation.navigate('WishList');
              }}
              cart={() => {
                navigation.navigate('Cart');
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="WishList"
        component={WishList}
        options={
          {
            // headerTitle: props => <Header title={'ProductDetails'} {...props} />,
          }
        }
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={
          {
            // headerTitle: props => <Header title={'ProductDetails'} {...props} />,
          }
        }
      />
      <Stack.Screen
        name="Products"
        component={Product}
        options={
          {
            // headerTitle: props => <Header title={'Products'} {...props} />,
          }
        }
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={
          {
            // headerTitle: props => <Header title={'ProductDetails'} {...props} />,
          }
        }
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
        options={
          {
            // headerTitle: props => <Header title={'Category'} {...props} />,
          }
        }
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
