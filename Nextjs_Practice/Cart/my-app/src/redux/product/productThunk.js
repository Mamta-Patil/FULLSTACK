import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (product) => {
  const response = await axios.get("https://fakestoreapi.com/products", product);
  return response.data;
})
