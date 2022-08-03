import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
} from '../store/reducers/User/UserLoginSlice';
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
} from '../store/reducers/User/UserRegisterSlice';

import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from 'react-native';

// const storeData = async (value, keyValue) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(keyValue, jsonValue);
//   } catch (e) {
//     console.log(e);
//   }
// };
export const login = (email, password) => async dispatch => {
  try {
    dispatch(userLoginRequest());
    const config = {
      headers: {
        'Content-Type': 'application/json', 
      },
    };

    const {data} = await axios.post(
      'https://iti-mern-ecommerce.herokuapp.com/api/users/login',
      {email, password},
      config,
    );
    dispatch(userLoginSuccess(data));
    await AsyncStorage.setItem('token', data.token);
  } catch (error) {
    dispatch(
      userLoginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      ),
    );
  }
};

export const logout = () => dispatch => {
  // AsyncStorage.removeItem('@userInfo');
  dispatch(userLogout());
};

export const register = (name, email, password) => async dispatch => {
  try {
    dispatch(userRegisterRequest());
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = await axios.post(
      'https://iti-mern-ecommerce.herokuapp.com/api/users/',
      {name, email, password},
      config,
    );
    dispatch(userRegisterSuccess(data));
    console.log(data);
    dispatch(userLoginSuccess(data));
    await AsyncStorage.setItem('token', data.token);
  } catch (error) {
    dispatch(
      userRegisterFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      ),
    );
  }
};
