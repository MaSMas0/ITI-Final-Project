import {configureStore, createReducer} from '@reduxjs/toolkit';
import userLoginReducer from './reducers/User/UserLoginSlice';
import userRegisterReducer from './reducers/User/UserRegisterSlice';
import cartReducer from './reducers/Cart/CartSlice';
import productsSlice from './reducers/Products/ProductsSlice';
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

const rootReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  cart: cartReducer,
  products: productsSlice,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
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

export default store;
