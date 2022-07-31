import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
const ErrorText = ({ErrorText}) => {
  return (
    <View style={styles.errorContainer}>
      <AntDesign name="closecircle" size={14} color={colors.danger} />
      <Text style={styles.errorText}>{ErrorText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  errorText: {
    color: colors.danger,
    flex: 1,
    marginLeft: 5,
  },
});

export default ErrorText;
