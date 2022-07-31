import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../config/colors';
const InputApp = ({
  onBlur,
  onChange,
  value,
  secureTextEntry = false,
  placeholder,
  icon,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry={secureTextEntry}
        style={styles.inputStyle}
      />
      <AntDesign syles={styles.inputIcons} name={icon} size={20} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    color: colors.black,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    // backgroundColor: colors.grey,
  },
});

export default InputApp;
