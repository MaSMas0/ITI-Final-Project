import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const SignIn = ({navigation}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);
  const onSubmit = data => console.log(data);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Sign In</Text>
        <View style={styles.subContainer}>
          <Text style={styles.labelStyle}>Email</Text>
          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/gi,
                message: 'Email valdation ',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder=" example@test.com"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputStyle}
              />
            )}
            name="UserName"
          />
          {errors.UserName && (
            <Text style={styles.errorText}>{errors.UserName.message}</Text>
          )}
          <Text style={styles.labelStyle}>Password</Text>
          <Controller
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'min lenght is 6',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder=" enter password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.inputStyle}
                secureTextEntry
              />
            )}
            name="Password"
          />
          {errors.Password && (
            <Text style={styles.errorText}>{errors.Password.message}</Text>
          )}
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.submit}>Sign in</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <Text>Don't have account? </Text>
            <TouchableWithoutFeedback>
              <Text
                style={styles.signUp}
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                Sign Up
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  inputStyle: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#eee',
  },
  labelStyle: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 150,
    width: '90%',
  },

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
  signUp: {
    color: 'black',
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default SignIn;
