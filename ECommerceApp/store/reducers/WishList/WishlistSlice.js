import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  wishLists: ['kareem'],
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      state.wishLists.push(action.payload);
    },
    removeWishList: (state, action) => {
      state.wishLists = state.filter(
        wishList => wishList['_id'] !== action.payload['_id'],
      );

      return state;
    },
  },
});

export const {addToWishList, removeWishList} = wishListSlice.actions;
export default wishListSlice.reducer;
