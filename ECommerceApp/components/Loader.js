import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import colors from '../config/colors';

function Loader({size}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.blue} />
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
