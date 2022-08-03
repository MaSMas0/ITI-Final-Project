import {configureStore} from '@reduxjs/toolkit';
import userLoginReducer from './reducers/User/UserLoginSlice';
import userRegisterReducer from './reducers/User/UserRegisterSlice';
const store = configureStore({
  reducer: {
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
  },
});

export default store;
