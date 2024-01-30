import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "./linkSlice";

export const store = configureStore({
    reducer: {
      linksStore: linksReducer
    }
  });