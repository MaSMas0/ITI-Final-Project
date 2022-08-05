import {
  cartAddItem,
  cartRemoveItem,
  cartSaveShippingAddress,
  cartSavePaymentMethod,
} from '../store/reducers/Cart/CartSlice';
import axios from 'axios';

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const {data} = await axios.get(
      `https://iti-mern-ecommerce.herokuapp.com/api/products/${id}`,
    );
    dispatch(
      cartAddItem({
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      }),
    );
  };
};
export const removeFromCart = id => {
  return async (dispatch, getState) => {
    dispatch(cartRemoveItem(id));
  };
};

export const saveShippingAddress = data => {
  return async dispatch => {
    dispatch(cartSaveShippingAddress(data));
  };
};
export const savePaymentMethod = data => {
  return async dispatch => {
    dispatch(cartSavePaymentMethod(data));
  };
};
