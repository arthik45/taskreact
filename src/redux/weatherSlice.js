import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to fetch weather data
export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=${API}`
  );
  return response.data;
});

const weatherSlice = createSlice({
  name: "weather",
  initialState: { data: null, status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
  },
});

export default weatherSlice.reducer;
