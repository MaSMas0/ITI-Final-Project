import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import TabViewExample from './screens/Ansary';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import navigationTheme from './navigation/navigationTheme';
import WishList from './screens/WishList';
import Cart from './screens/Cart';
import SettingProfile from './screens/SettingProfile';
import Payment from './screens/Payment';
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' barStyle='dark-content'  />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
