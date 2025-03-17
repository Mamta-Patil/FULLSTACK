import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  celsius: 0,
  fahrenheit: 32,
};

const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    convertCelsius: (state, action) => {
      state.celsius = action.payload;
      state.fahrenheit = (action.payload * 9) / 5 + 32;
    },
    convertFahrenheit: (state, action) => {
      state.fahrenheit = action.payload;
      state.celsius = ((action.payload - 32) * 5) / 9;
    },
  },
});

export const { convertCelsius, convertFahrenheit } = temperatureSlice.actions;
export default temperatureSlice.reducer;
