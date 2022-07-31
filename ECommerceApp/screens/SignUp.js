import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import InputApp from '../components/InputApp';
import ErrorText from '../components/ErrorText';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../config/colors';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const password = watch('Password');
  console.log(password);
  console.log(errors);
  const onSubmit = data => console.log(data);
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
                onChangeText={onChange}
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
                onChangeText={onChange}
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
                onChangeText={onChange}
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
                onChangeText={onChange}
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
              validate: value => password === value || 'Passowrd not match',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputApp
                style={styles.inputStyle}
                placeholder="Confirm Password"
                onBlur={onBlur}
                onChangeText={onChange}
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
