import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    apiMode: "country",
    apiUrl: `https://restcountries.com/v3.1/name/canada`,
    args: "canada",
  },
};

export const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    updateApiData: (state, action) => {
      console.log(state, action);
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateApiData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
