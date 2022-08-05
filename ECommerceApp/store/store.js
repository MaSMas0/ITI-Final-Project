import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './reducers/User/CartReducer';
import userLoginReducer from './reducers/User/UserLoginSlice';
import userRegisterReducer from './reducers/User/UserRegisterSlice';

const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    cart: cartSlice,
  },
});

export default store;
