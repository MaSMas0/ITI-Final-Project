import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import WishList from './screens/WishList';
import Cart from './screens/Cart';
import SettingProfile from './screens/SettingProfile';
import Payment from './screens/Payment';
import WelcomeNav from './navigation/WelcomeNav';
import Address from './screens/Address';
import Profile from './screens/Profile';
import NewAddress from './screens/NewAddress';
import Drawerheader from './components/Drawerheader';
import WelcomePage from './screens/WelcomePage';
import OrderList from './screens/Orderslist';
import MainOrderDetails from './screens/MainOrderDetails';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <WelcomeNav />
    </NavigationContainer>
  );
};

export default App;
