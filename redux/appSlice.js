import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    test: "yes",
  },
  reducers: {
    setAppState: (state, action) => {
      return action.payload;
    },
  },
});

export const { setAppState } = appSlice.actions;

export default appSlice.reducer;
