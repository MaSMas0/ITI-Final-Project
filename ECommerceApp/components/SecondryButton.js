import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../config/colors';


function SecondryButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
     
  <Text style={styles.submit}>
        <FontAwesome
              name="cart-plus"
              size={20}>
        </FontAwesome> {title}
  </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submit: {
    color: colors.black,
    backgroundColor: colors.gold,
    height: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    borderRadius: 8,
    fontWeight: 'bold',
    color:colors.lightGrey,
    
    
  },
});

export default SecondryButton;
