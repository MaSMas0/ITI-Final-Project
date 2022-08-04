import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../config/colors';

function SecondryButton({onPress, title, style}) {
  console.log({...style}, 'esta');
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 0}}
        colors={['#030A4E', '#22336a']}
        style={[styles.submit, style]}>
        <Text style={styles.submit}>
          {/* <FontAwesome name="cart-plus" size={20}></FontAwesome>  */}
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submit: {
    color: colors.black,
    height: 35,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    borderRadius: 15,
    fontWeight: 'bold',
    color: colors.lightGrey,
  },
});

export default SecondryButton;
