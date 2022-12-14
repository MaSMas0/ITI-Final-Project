import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    cartAddItem: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.product === item.product);

      if (existItem) {
        state.cartItems = state.cartItems.map(x =>
          x.product === existItem.product ? item : x,
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }
    },
    cartRemoveItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        x => x.product !== action.payload,
      );
    },
    cartSaveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    cartSavePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      state.itemsPrice = state.cartItems
        .reduce((acc, item) => acc + item.price * item.qty, 0)
        .toFixed(2);
      state.shippingPrice = state.itemsPrice > 100 ? 0 : 20;
      state.taxPrice = Number(0.14 * state.itemsPrice).toFixed(2);
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);
    },
    cartClearItems: state => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  cartAddItem,
  cartRemoveItem,
  cartSaveShippingAddress,
  cartSavePaymentMethod,
  cartClearItems,
} = CartSlice.actions;

export default CartSlice.reducer;
