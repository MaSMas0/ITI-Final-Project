import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import colors from '../config/colors';

function Loader({size, color = colors.blue}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Loader;
