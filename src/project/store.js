import userReducer from "./explore/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    exploreReducer,
  },
});

export default store;
