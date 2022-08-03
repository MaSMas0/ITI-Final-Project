import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

import React from 'react';

export default function FreeShipping() {
  return <Text style={styles.shipping}>Free Shipping*</Text>;
}

const styles = StyleSheet.create({
  shipping: {
    backgroundColor: colors.mediumBlue,
    color: colors.grey,
    width: '52%',
    paddingVertical: 4,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 7,
    marginLeft: 3,
  },
});
