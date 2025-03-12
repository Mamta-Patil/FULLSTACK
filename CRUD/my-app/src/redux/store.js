    "use client"
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './product/productslice';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;   
