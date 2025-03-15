  
// import { createAsyncThunk } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...userData, action: "signup" }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...credentials, action: "login" }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  } 
});






// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const res = await fetch("/api/auth", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...userData, action: "signup" }),
//       });

//       if (!res.ok) {
//         // Read the error message safely
//         const errorText = await res.text();
//         let errorMessage = "Something went wrong";
//         try {
//           errorMessage = JSON.parse(errorText).message;
//         } catch (err) {
//           console.error("Invalid JSON response", err);
//         }
//         throw new Error(errorMessage);
//       }

//       const data = await res.json(); // ✅ Only parse JSON if res.ok
//       localStorage.setItem("token", data.token);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
