// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchProducts } from './postthunk';

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

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProducts = createAsyncThunk('products/fetchProducts',
//     async () => {
//         const res = await axios.get('https://fakestoreapi.com/products');
//         console.log(res);
//         return res;
//     }
// );






// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProducts = createAsyncThunk(
//   '/products/fetchProducts',
//   async (_, { rejectWithValue }) => { // Use rejectWithValue for proper error handling
//     try {
//       const res = await axios.get('https://fakestoreapi.com/products');
//       return res.data; // ✅ Always return res.data
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Failed to fetch products"); // ✅ Handle errors
//     }
//   }
// );



import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/studentsinfo/getalldata"; // Fake Store API


// ✅ READ: Fetch all products
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     try {
//       const response = await axios.get(API_URL);
//       console.log(response)
//       return response.data; // Always return data
//     } catch (error) {
//       return(error.response?.data || "Failed to fetch products");
//     }
//   }
// );


export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const response = await axios.get(API_URL);
    return response.data;
  });

// ✅ CREATE: Add a new product
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, productData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to add product");
    }
  }
);

// ✅ UPDATE: Edit a product
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update product");
    }
  }
);

// ✅ DELETE: Remove a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      return id; // Return deleted product ID
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete product");
    }
  }
);
