import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function PrimaryButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.submit}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submit: {
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    textAlign: 'center',
    marginTop: 10,
    display: 'flex',
    textAlignVertical: 'center',
    fontSize: 18,
    borderRadius: 8,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default PrimaryButton;
