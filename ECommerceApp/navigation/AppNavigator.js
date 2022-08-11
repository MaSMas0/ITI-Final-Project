import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeNavigator from './HomeNavigator';
import CategoryNavigator from './CategoryNavigator';
import ProfileNavigator from './ProfileNavigator';

import colors from '../config/colors';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Header">
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerTitle: () => (
            <SearchBar
              title={'Home'}
              onPress={() => navigation.navigate('SearchScreen')}
            />
          ),
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
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
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
        options={{
          headerShown: false,
        }}
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
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
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
      <Stack.Screen
        name="Settings"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const Footer = () => (
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
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({color}) => (
          <MaterialIcons name="account-circle" color={color} size={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
