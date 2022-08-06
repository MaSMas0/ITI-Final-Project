import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const api = 'https://iti-mern-ecommerce.herokuapp.com/api/products';

// writing by MohamedAshraf
export const getProducts = createAsyncThunk('products/getProducts', async _ => {
  const res = await fetch(api);
  const data = await res.json();
  return data;
});
const productsSlice = createSlice({
  name: 'products',
  initialState: {products: [], isLoading: false, isError: null},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = null;
      console.log(action);
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      console.log(action);
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default productsSlice.reducer;
