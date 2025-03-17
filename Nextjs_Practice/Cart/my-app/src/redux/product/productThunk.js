import { createAsyncThunk } from "@reduxjs/toolkit";

// Fetch products from FakeStoreAPI
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
});
