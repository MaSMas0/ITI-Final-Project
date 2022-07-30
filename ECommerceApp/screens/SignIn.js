import React from 'react';
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
    <View style={styles.container}>
      <View>
        {errors.UserName && <Text>{errors.UserName.message}</Text>}
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
              placeholder="UserName"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="UserName"
        />
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
            />
          )}
          name="Password"
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        <View style={{flexDirection: 'row'}}>
          <Text>if you don't have account </Text>
          <TouchableWithoutFeedback>
            <Text
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              SignUp
            </Text>
          </TouchableWithoutFeedback>
        </View>
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

export default SignIn;
