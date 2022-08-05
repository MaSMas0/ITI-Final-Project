import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
console.log(initialState, 'ss');

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state);
      state.push(action.payload);
    },
  },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
