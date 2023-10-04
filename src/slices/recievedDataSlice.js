import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const recievedDataSlice = createSlice({
  name: "recievedData",
  initialState,
  reducers: {
    updateRecievedData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateRecievedData } = recievedDataSlice.actions;
export default recievedDataSlice.reducer;
