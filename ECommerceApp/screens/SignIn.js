import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
    <ScrollView style={styles.mainContainer}>
      <AntDesign style={styles.backIcon} name="left" size={25}></AntDesign>

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
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder=" Example@test.com"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.inputStyle}
                />
                <AntDesign name="mail" size={20}></AntDesign>
              </View>
            )}
            name="UserName"
          />
          {errors.UserName && (
            <Text style={styles.errorText}>
              <AntDesign name="closecircle" size={14}></AntDesign>
              {errors.UserName.message}
            </Text>
          )}
          <Text style={styles.labelStyle}>Password</Text>
          <Controller
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Min length is 6',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder=" Enter your password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.inputStyle}
                  secureTextEntry
                />
                <AntDesign
                  styles={styles.inputIcons}
                  name="lock1"
                  size={20}></AntDesign>
              </View>
            )}
            name="Password"
          />
          {errors.Password && (
            <Text style={styles.errorText}>
              <AntDesign name="closecircle" size={14}></AntDesign>
              {errors.Password.message}
            </Text>
          )}
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.submit}>Sign in</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
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
    flex: 1,
  },
  labelStyle: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 100,
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
  mainContainer: {
    backgroundColor: 'white',
  },
  backIcon: {
    marginTop: 20,
    marginLeft: 10,
    color: 'black',
  },
  passwordContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flexDirection: 'row',
  },
  signUpContainer: {
    flexDirection: 'row',
  },
});

export default SignIn;
