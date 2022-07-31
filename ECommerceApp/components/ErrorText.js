import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ErrorText = ({ErrorText}) => {
  return (
    <View style={styles.errorContainer}>
      <AntDesign name="closecircle" size={14} color="red" />
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
    color: 'red',
    flex: 1,
    marginLeft: 5,
  },
});

export default ErrorText;
