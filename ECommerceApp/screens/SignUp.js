import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import InputApp from '../components/InputApp';
import ErrorText from '../components/ErrorText';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../actions/UserAction';

const SignUp = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();
  const dispatch = useDispatch();
  // const nameInput = watch().FirstName + ' ' + watch().LastName;
  // const emailInput = watch().Email;
  const passwordInput = watch().Password;
  // const confirmPasswordInput = watch().ConfirmPassword;

  // console.log(nameInput);
  // console.log(emailInput);
  // console.log(passwordInput);
  // console.log(confirmPasswordInput);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const userRegister = useSelector(state => state.userRegister);
  const {loading, error, userInfo} = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigation.navigate('SignIn');
    }
  }, [userInfo, navigation]);

  // useEffect(() => {
  //   setEmail(emailInput);
  //   setPassword(passwordInput);
  //   setName(nameInput);
  //   setConfirmPassword(confirmPasswordInput);
  // }, [confirmPasswordInput, emailInput, nameInput, passwordInput]);

  const onSubmit = ({FirstName, LastName, Password, Email}) => {
    let fullName = FirstName + LastName;
    dispatch(register(fullName, Email, Password));
  };
  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.container}>
        <Text style={styles.signup}>Sign Up</Text>
        <View style={styles.subContainer}>
          <Text style={styles.labelStyle}>First Name</Text>

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
              />
            )}
            name="FirstName"
          />
          {errors.FirstName && (
            <ErrorText ErrorText={errors.FirstName.message} />
          )}

          <Text style={styles.labelStyle}>Last Name</Text>

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
              />
            )}
            name="LastName"
          />
          {errors.LastName && <ErrorText ErrorText={errors.LastName.message} />}

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
                style={styles.inputStyle}
                placeholder="Email"
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

          {/* <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.inputStyle1} value="+20" editable={false} />
          <Controller
            control={control}
            rules={{
              required: 'Number is required',
              pattern: {
                value: /^01[0125][0-9]{8}$/gm,
                message: 'Phone is not valid',
              },
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputStyle2}
                placeholder="Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="number-pad"
              />
            )}
            name="Number"
          />
        </View> */}

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
              />
            )}
            name="Password"
          />
          {errors.Password && <ErrorText ErrorText={errors.Password.message} />}

          <Text style={styles.labelStyle}>Confirm Password</Text>

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
              />
            )}
            name="ConfirmPassword"
          />
          {errors.ConfirmPassword && (
            <ErrorText ErrorText={errors.ConfirmPassword.message} />
          )}

          <PrimaryButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    // flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  signup: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'flex-start',
    marginVertical: 40,
    marginHorizontal: 20,
  },

  labelStyle: {
    color: colors.black,
    fontWeight: 'bold',
    margin: 5,
  },

  subContainer: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingVertical: 40,
    width: '90%',
  },
});

export default SignUp;
