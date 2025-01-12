import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import performanceReducer from "./slices/performanceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    performances: performanceReducer,
  },
});

export default store;
