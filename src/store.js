import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "./slices/apiDataSlice";
import recievedDataReducer from "./slices/recievedDataSlice";
import dogDataReducer from "./slices/dogDataSlice";
export const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
    recievedData: recievedDataReducer,
    dogData: dogDataReducer,
  },
});
