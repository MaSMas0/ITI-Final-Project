import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import navigationTheme from './navigation/navigationTheme';
import Product from './screens/Product';
import SingleDetails from './screens/SingleDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}

      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Products" component={Product} />
        <Stack.Screen name="SingleDetails" component={SingleDetails} />
      </Stack.Navigator>
      {/* 
      <Product />
      <SingleDetails /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
