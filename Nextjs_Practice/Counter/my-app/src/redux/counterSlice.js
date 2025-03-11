"use client"

import { createSlice } from "@reduxjs/toolkit";

const savedCount = typeof window !== "undefined" ? localStorage.getItem("count") : null;


const initialState = {
    count: savedCount ? savedCount: 0, // Default to 0 if not found
  };


const counterSlice = createSlice({
  name: "counter",
  initialState, // ✅ Pass the initialState here
  reducers: {
    increment: (state) => {
      state.count += 1;
      localStorage.setItem("count",state.count);
    },
    decrement: (state) => {
        const count =localStorage.getItem("count")
           if(count<0)
      {
        alert("nagative value")
      }
      else
      {
        state.count -= 1;
        localStorage.setItem("count", state.count);
      }
  
    },
    reset: (state) => {
      state.count = 0;
      localStorage.setItem("count", state.count);

    },
  },
});

// Export actions & reducer
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer; // ✅ Ensure reducer is exported properly
