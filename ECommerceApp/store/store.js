import {configureStore} from '@reduxjs/toolkit';
import userLoginReducer from './reducers/User/UserLoginSlice';
import userRegisterReducer from './reducers/User/UserRegisterSlice';
import cartReducer from './reducers/Cart/CartSlice';
import productsSlice from './reducers/Products/ProductsSlice';
import orderCreateReducer from './reducers/Order/OrderSlice';
import orderDetailsReducer from './reducers/Order/OrderDetailsSlice';
import orderListMyReducer from './reducers/Order/OrderMyListSlice';
import orderPayReducer from './reducers/Order/OrderPaySlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WishlistReducer from './reducers/WishList/WishlistSlice';

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  products: productsSlice,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  wishLists: WishlistReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['cart','wishLists'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
// persistor.purge();

export default store;
