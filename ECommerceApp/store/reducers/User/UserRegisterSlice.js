import {createSlice} from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from 'react-native';

const userInfoFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@userInfo');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const initialState = {
  userInfo: {},
};

export const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState,
  reducers: {
    userRegisterRequest: state => {
      state.loading = true;
    },
    userRegisterSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    userRegisterFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    userLogout: state => {
      state.userInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  userRegisterRequest,
  userRegisterSuccess,
  userRegisterFail,
  userLogout,
} = userRegisterSlice.actions;

export default userRegisterSlice.reducer;
