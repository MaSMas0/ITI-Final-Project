import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputApp from '../components/InputApp';
import ErrorText from '../components/ErrorText';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions/UserActions';
import routes from '../navigation/routes';

const SignIn = ({navigation}) => {
  const userLogin = useSelector(state => state.userLogin);

  const {loading, error, userInfo} = userLogin;
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const onSubmit = data => {
    console.log(data);

    dispatch(login(data.Email, data.Password));
    navigation.replace(routes.profile);
  };
  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <AntDesign style={styles.backIcon} name="back" size={40} />
        <Text
          style={{
            color: colors.blue,
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          Let's Sign You in.
        </Text>
        <Text style={styles.text}>Welcome Back.</Text>
        <Text style={styles.text}>You Have Been Missed!</Text>
        <View style={styles.subContainer}>
          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/gi,
                message: 'Email not valid',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputApp
                placeholder=" Example@test.com"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                icon="mail"
                placeholderTextColor={colors.lightBlue}
              />
            )}
            name="Email"
          />
          {errors.Email && <ErrorText ErrorText={errors.Email.message} />}
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
                onChange={onChange}
                value={value}
                icon="lock1"
                secureTextEntry={true}
                placeholderTextColor={colors.lightBlue}
              />
            )}
            name="Password"
          />
          {errors.Password && <ErrorText ErrorText={errors.Password.message} />}
          {error && <ErrorText ErrorText={error} />}
        </View>
      </View>

      <View>
        <View style={styles.signUpContainer}>
          <Text style={{fontSize: 16}}>Don't have an account? </Text>
          <TouchableWithoutFeedback>
            <Text
              style={styles.signUp}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              Register
            </Text>
          </TouchableWithoutFeedback>
        </View>

        <PrimaryButton title="Sign In" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingBottom: 15,
  },
  welcome: {
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  text: {
    fontSize: 30,
    color: colors.blue,
  },

  subContainer: {
    paddingVertical: 50,
    marginStart: 10,
  },

  signUp: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 18,
    marginStart: 2,
  },

  backIcon: {
    marginBottom: 10,
    color: colors.lightBlue,
  },
  signUpContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;
