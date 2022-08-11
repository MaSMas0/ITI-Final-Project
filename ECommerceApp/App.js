import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import navigationTheme from './navigation/navigationTheme';
import WishList from './screens/WishList';
import Cart from './screens/Cart';
import SettingProfile from './screens/SettingProfile';
import Payment from './screens/Payment';

import Address from './screens/Address';
import Profile from './screens/Profile';
import NewAddress from './screens/NewAddress';
import Drawerheader from './components/Drawerheader';
import WelcomePage from './screens/WelcomePage';
import OrderList from './screens/Orderslist';
import OrderDetails from './screens/OrderDetails';
import MainOrderDetails from './screens/MainOrderDetails';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <OrderDetails /> */}
      <MainOrderDetails />
     
      {/* <OrderList /> */}
      {/* <Profile /> */}
      {/* <AuthNavigator /> */}
      {/* <AppNavigator /> */}
      {/* <Payment /> */}
      {/* <Drawerheader /> */}
      {/* <MoreOrderItemDetails /> */}
    </NavigationContainer>
  );
};

export default App;
