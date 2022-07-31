import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import SlideShow from './components/SlideShow';

const App = () => {
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      <SlideShow />
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
