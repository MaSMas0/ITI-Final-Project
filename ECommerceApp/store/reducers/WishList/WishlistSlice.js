import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  wishLists: [],
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const index = state.wishLists.findIndex(
        el => el._id === action.payload._id,
      );
      if (index === -1) {
        state.wishLists.push({...action.payload,isLike:true});
      }
    },
    removeWishList: (state, action) => {
      state.wishLists = state.wishLists.filter(
        wishList => wishList._id !== action.payload._id,
      );

      return state;
    },
  },
});

export const {addToWishList, removeWishList} = wishListSlice.actions;
export default wishListSlice.reducer;
