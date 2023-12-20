import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui.js";
import dataSlice from "./data.js";


const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    data: dataSlice.reducer
  }
});

export default store;