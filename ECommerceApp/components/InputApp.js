import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const InputApp = ({
  onBlur,
  onChange,
  value,
  secureTextEntry = false,
  placeholder,
  icon,
}) => {
  return (
    <View style={styles.container}>
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
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});

export default InputApp;
