import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import InputApp from '../components/InputApp';
import ErrorText from '../components/ErrorText';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../actions/UserActions';
import routes from '../navigation/routes';

const SignUp = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const dispatch = useDispatch();

  const passwordInput = watch().Password;

  const userRegister = useSelector(state => state.userRegister);
  const {loading, error, userInfo} = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigation.navigate(routes.LogIn);
    }
  }, [userInfo, navigation]);

  const onSubmit = ({FirstName, LastName, Password, Email}) => {
    let fullName = FirstName + LastName;
    dispatch(register(fullName, Email, Password));
  };
  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        <View
          style={{
            alignSelf: 'flex-start',
            marginVertical: 30,
            marginHorizontal: 25,
          }}>
          <Text style={styles.signup}>Let's Sign You Up.</Text>
          <Text style={styles.text}>Join Us, </Text>
          <Text style={styles.text}>Create an Account.</Text>
        </View>
        <View style={styles.subContainer}>
          <Controller
            control={control}
            rules={{
              required: 'First Name is required',
              minLength: {
                value: 3,
                message: 'please enter more than three characters',
                pattern: {
                  value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gim,
                  message: 'not match',
                },
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputApp
                style={styles.inputStyle}
                placeholder="First Name"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                icon="user"
                placeholderTextColor={colors.lightBlue}
              />
            )}
            name="FirstName"
          />
          {errors.FirstName && (
            <ErrorText ErrorText={errors.FirstName.message} />
          )}

          <Controller
            control={control}
            rules={{
              required: 'Last Name is required',
              minLength: {
                value: 3,
                message: 'please enter more than three characters',
              },
              pattern: {
                value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gim,
                message: 'not match',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputApp
                style={styles.inputStyle}
                placeholder="Last Name"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                icon="user"
                placeholderTextColor={colors.lightBlue}
              />
            )}
            name="LastName"
          />
          {errors.LastName && <ErrorText ErrorText={errors.LastName.message} />}

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
                style={styles.inputStyle}
                placeholder="Email"
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
                message: 'min lenght is 6',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputApp
                style={styles.inputStyle}
                placeholder="Password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                secureTextEntry
                icon="lock1"
                placeholderTextColor={colors.lightBlue}
              />
            )}
            name="Password"
          />
          {errors.Password && <ErrorText ErrorText={errors.Password.message} />}

          <Controller
            control={control}
            rules={{
              required: 'Confirm Password is required',
              validate: value =>
                passwordInput === value || 'Passowrd not match',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputApp
                style={styles.inputStyle}
                placeholder="Confirm Password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                secureTextEntry
                icon="lock1"
                placeholderTextColor={colors.lightBlue}
              />
            )}
            name="ConfirmPassword"
          />
          {errors.ConfirmPassword && (
            <ErrorText ErrorText={errors.ConfirmPassword.message} />
          )}
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
        }}>
        <View style={styles.signinContainer}>
          <Text style={{fontSize: 16}}> Have an account? </Text>
          <TouchableWithoutFeedback>
            <Text
              style={styles.signUp}
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              SignIn
            </Text>
          </TouchableWithoutFeedback>
          {error && <ErrorText ErrorText={error} />}
        </View>
        <PrimaryButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
        {error && <ErrorText ErrorText={error} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    // flex: 1,
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingVertical: 30,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingVertical: 10,
    width: '90%',
  },
  signup: {
    fontWeight: 'bold',

    fontSize: 40,
    color: colors.blue,
  },
  text: {
    fontSize: 30,
    color: colors.blue,
  },
  signUp: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 18,
    marginStart: 2,
  },
  signinContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
