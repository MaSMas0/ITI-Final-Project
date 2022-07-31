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
import InputApp from '../components/InputApp';
import ErrorText from '../components/ErrorText';
import PrimaryButton from '../components/PrimaryButton';
const SignIn = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);
  const onSubmit = data => console.log(data);
  return (
    <ScrollView style={styles.mainContainer}>
      <AntDesign style={styles.backIcon} name="left" size={25} />

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
              <InputApp
                placeholder=" Example@test.com"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                icon="mail"
              />
            )}
            name="UserName"
          />
          {errors.UserName && <ErrorText ErrorText={errors.UserName.message} />}
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
              <InputApp
                placeholder=" Enter your password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                icon="lock1"
                secureTextEntry={true}
              />
            )}
            name="Password"
          />
          {errors.Password && <ErrorText ErrorText={errors.Password.message} />}

          <PrimaryButton title="Sign In" onPress={handleSubmit(onSubmit)} />
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
  labelStyle: {
    color: 'black',
    fontWeight: 'bold',
    margin: 5,
  },

  subContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 100,
    width: '90%',
  },

  signUp: {
    color: 'black',
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginStart: 2,
  },
  mainContainer: {
    backgroundColor: 'white',
  },
  backIcon: {
    marginTop: 20,
    marginLeft: 10,
    color: 'black',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginStart: 10,
  },
});

export default SignIn;
