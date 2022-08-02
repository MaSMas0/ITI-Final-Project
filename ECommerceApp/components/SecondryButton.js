import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';


function SecondryButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.submit}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submit: {
    color: colors.black,
    backgroundColor: "#fdb833",
    width: '100%',
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    borderRadius: 8,
    fontWeight: 'bold',
  },
});

export default SecondryButton;
