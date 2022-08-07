import React from 'react';
import {StatusBar} from 'react-native';
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
import Page1 from './screens/Page1';
import Address from './screens/Address';
import NewAddress from './screens/NewAddress';
import MoreOrderDetails from './components/MoreOrderDetailsCom';
import MoreOrderItemDetails from './components/MoreOrderItemDetails';
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* <AuthNavigator /> */}
      <AppNavigator />
      {/* <Payment /> */}
      {/* <MoreOrderDetails /> */}
      {/* <MoreOrderItemDetails /> */}
    </NavigationContainer>
  );
};

export default App;
