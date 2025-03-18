import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/product/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
