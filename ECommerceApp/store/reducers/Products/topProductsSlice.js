import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const api = 'https://iti-mern-ecommerce.herokuapp.com/api/products/top';

// writing by MohamedAshraf
export const getTopProducts = createAsyncThunk(
  'topProducts/getTopProducts',
  async _ => {
    const res = await fetch(api);
    const data = await res.json();
    return data;
  },
);
const topProductsSlice = createSlice({
  name: 'topProducts',
  initialState: {
    topProducts: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: {
    [getTopProducts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = null;
      console.log(action);
    },
    [getTopProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.topProducts = action.payload;

      //   action.payload.products
    },
    [getTopProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export default topProductsSlice.reducer;
