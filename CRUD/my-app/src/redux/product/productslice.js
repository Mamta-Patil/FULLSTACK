// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchProducts } from './productthunk';

// const productsSlice = createSlice({
//     name: 'products',
//     initialState: {
//         items: [],
//         status: 'idle',
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.items = action.payload;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             });
//     },
// });

// export default productsSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";
// import { fetchProducts } from "./productthunk";
// // import { fetchProducts } from "./productThunks"; // Ensure correct import

// const productSlice = createSlice({
//   name: "products",
//   initialState: { items: [], status: "idle", error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.items = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });

// export default productSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, addProduct, updateProduct, deleteProduct } from "./productthunk";
const productSlice = createSlice({
  name: "products",
  initialState: {
     items: [], 
     status: "idle", 
     error: null
     },
  reducers: {}, // No need for normal reducers, we handle async cases
  extraReducers: (builder) => {
    builder
      // ✅ READ
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // ✅ CREATE
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      // ✅ UPDATE
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })

      // ✅ DELETE
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
