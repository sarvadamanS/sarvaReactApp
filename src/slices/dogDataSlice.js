import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const dogDataSlice = createSlice({
  name: "dogData",
  initialState,
  reducers: {
    updateDogData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateDogData } = dogDataSlice.actions;
export default dogDataSlice.reducer;
