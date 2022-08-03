import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputApp from '../components/InputApp';
import ErrorText from '../components/ErrorText';
import PrimaryButton from '../components/PrimaryButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import colors from '../config/colors';

import {useDispatch, useSelector} from 'react-redux';
import {login} from '../actions/UserAction';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userLogin = useSelector(state => state.userLogin);
  const {loading, error, userInfo} = userLogin;
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const emailInput = watch().Email;
  const passwordInput = watch().Password;
  useEffect(() => {
    if (userInfo) {
      navigation.navigate('SignUp');
    }
  }, [navigation, userInfo]);

  useEffect(() => {
    setEmail(emailInput);
    setPassword(passwordInput);
  }, [emailInput, passwordInput]);
  const onSubmit = () => {
    // console.log(email);
    // console.log(userInfo);
    dispatch(login(email, password));
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <AntDesign style={styles.backIcon} name="left" size={25} />

      <View style={styles.container}>
        <Text style={styles.header}>
          <FontAwesome5 name="person-booth" size={30}></FontAwesome5>Sign In
        </Text>
        <View style={styles.subContainer}>
          <Text style={styles.labelStyle}>Email</Text>
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
              />
            )}
            name="Email"
          />
          {errors.Email && <ErrorText ErrorText={errors.Email.message} />}
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
                onChange={onChange}
                value={value}
                icon="lock1"
                secureTextEntry={true}
              />
            )}
            name="Password"
          />
          {errors.Password && <ErrorText ErrorText={errors.Password.message} />}

          <PrimaryButton title="Sign In" onPress={handleSubmit(onSubmit)} />
          {error && <ErrorText ErrorText={error} />}
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
    color: colors.black,
    marginTop: 50,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  labelStyle: {
    color: colors.black,
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
    color: colors.black,
    // textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginStart: 2,
  },
  mainContainer: {
    backgroundColor: colors.white,
  },
  backIcon: {
    marginTop: 20,
    margin: 10,
    color: colors.black,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginStart: 10,
  },
});

export default SignIn;
