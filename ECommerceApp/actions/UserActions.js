import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogout,
  getUpdatedJwt,
  updateJwt,
} from '../store/reducers/User/UserLoginSlice';
import {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
} from '../store/reducers/User/UserRegisterSlice';
import axios from 'axios';
import {persistor} from '../store/store';

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
  dispatch(userLogout());
  persistor.purge();
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
