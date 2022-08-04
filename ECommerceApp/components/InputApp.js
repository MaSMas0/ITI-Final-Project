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
  placeholderTextColor
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry={secureTextEntry}
        style={styles.inputStyle}
      
      />
      {/* <AntDesign  color={'#030A4E'} name={icon} size={20} /> */}
    </View>

  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    color: colors.blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderWidth:1,
    borderColor:colors.blue,
    margin:5,
    borderRadius:10,

  },
  inputStyle:{
    flex:1,

  }

});

export default InputApp;
