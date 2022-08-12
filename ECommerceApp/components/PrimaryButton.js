import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';
import Loader from './Loader';
function PrimaryButton({onPress, title, loading}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.submit}>
        {!loading && <Text style={styles.title}>{title}</Text>}
        {loading && <Loader size={20} color={colors.white} />}
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
