import {
  orderCreateRequest,
  orderCreateSuccess,
  orderCreateFail,
} from '../store/reducers/Order/OrderSlice';
import {
  orderDetailsRequest,
  orderDetailsSuccess,
  orderDetailsFail,
} from '../store/reducers/Order/OrderDetailsSlice';
import {
  orderPayRequest,
  orderPaySuccess,
  orderPayFail,
} from '../store/reducers/Order/OrderPaySlice';
import {
  orderListMyRequest,
  orderListMySuccess,
  orderListMyFail,
} from '../store/reducers/Order/OrderMyListSlice';

import {logout} from './UserActions';
import axios from 'axios';
import {cartClearItems} from '../store/reducers/Cart/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const createOrder = order => async (dispatch, getState) => {
  try {
    dispatch(orderCreateRequest());
    const {
      userLogin: {userInfo},
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.post(
      `https://iti-mern-ecommerce.herokuapp.com/api/orders`,
      order,
      config,
    );
    dispatch(orderCreateSuccess(data));
    dispatch(cartClearItems(data));
    await AsyncStorage.removeItem('cartItems');
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch(orderCreateFail(message));
  }
};

export const getOrderDetails = id => async (dispatch, getState) => {
  try {
    dispatch(orderDetailsRequest());
    const {
      userLogin: {userInfo},
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const {data} = await axios.get(
      `https://iti-mern-ecommerce.herokuapp.com/api/orders/${id}`,
      config,
    );
    dispatch(orderDetailsSuccess(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch(orderDetailsFail(message));
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch(orderPayRequest());
      const {
        userLogin: {userInfo},
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const {data} = await axios.put(
        `https://iti-mern-ecommerce.herokuapp.com/api/orders/${orderId}/pay`,
        paymentResult,
        config,
      );
      dispatch(orderPaySuccess(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === 'Not authorized, token failed') {
        dispatch(logout());
      }
      dispatch(orderPayFail(message));
    }
  };

export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch(orderListMyRequest());
    const {
      userLogin: {userInfo},
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const {data} = await axios.get(
      `https://iti-mern-ecommerce.herokuapp.com/api/orders/myorders`,
      config,
    );
    dispatch(orderListMySuccess(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch(orderListMyFail(message));
  }
};
