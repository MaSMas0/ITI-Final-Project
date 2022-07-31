import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SlideShow from '../components/SlideShow';

const Home = props => {
  return (
    <View style={styles.container}>
      <SlideShow />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
