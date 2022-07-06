import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = __DEV__
  ? "http://localhost:3000/v1"
  : "https://0ykx831wdj.execute-api.us-east-1.amazonaws.com/v1";

export const getToken = createAsyncThunk(
  //action type string
  "token/fetch",
  // callback function
  async (thunkAPI) => {
    let tokenReq = await axios.get(`${api_url}/token`);
    console.log(tokenReq);
    return tokenReq;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState: {
    token: null,
    username: "grant",
  },
  reducers: {
    setAppState: (state, action) => {
      return action.payload;
    },
    loadChargers: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload.data.access_token;
    });
  },
});

export const { setAppState } = appSlice.actions;

export default appSlice.reducer;
