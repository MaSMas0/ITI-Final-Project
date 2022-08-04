import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';
function PrimaryButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.submit}>

      <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submit: {
    backgroundColor: colors.blue,
    width: 320,
    height: 60,
    borderRadius: 22,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10

  },
  title:{
    color: colors.white,
    fontSize: 24,
    fontWeight:'bold' 
  }
});

export default PrimaryButton;
