import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

import React from 'react';

export default function FreeShipping() {
  return <Text style={styles.shipping}>Free Shipping*</Text>;
}

const styles = StyleSheet.create({
  shipping: {
    backgroundColor: colors.gold,
    color: colors.grey,
    width: '45%',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 5,
    marginLeft: 3,
  },
});
