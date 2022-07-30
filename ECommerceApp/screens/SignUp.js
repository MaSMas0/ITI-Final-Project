import React, {useRef} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
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
    <View style={styles.container}>
      <View>
        {errors.FirstName && <Text>{errors.FirstName.message}</Text>}
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
            <TextInput
              placeholder="FirstName"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="FirstName"
        />
        {errors.LastName && <Text>{errors.LastName.message}</Text>}
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
            <TextInput
              placeholder="LastName"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="LastName"
        />
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
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Email"
        />
        <View style={{flexDirection: 'row'}}>
          <TextInput value="+20" editable={false} />
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
                placeholder="Number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="number-pad"
              />
            )}
            name="Number"
          />
        </View>

        {errors.Password && <Text>{errors.Password.message}</Text>}
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
              placeholder="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="Password"
        />
        {errors.ConfirmPassword && (
          <Text>{errors.ConfirmPassword.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: 'Confirm Password is required',
            validate: value => password === value || 'Passowrd not match',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Confirm Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="ConfirmPassword"
        />

        <Button title="SignUP" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUp;
