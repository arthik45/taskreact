import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import authReducer from "./authSlice";
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    weather: weatherReducer,
  },
});

export default store;

