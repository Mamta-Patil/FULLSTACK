import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default productsSlice.reducer;
