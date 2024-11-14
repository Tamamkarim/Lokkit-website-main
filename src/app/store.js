import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../toolkit/userSlice";

const store = configureStore({
  reducer: {
    userSlice: userReducer,
  },
});

export default store;
