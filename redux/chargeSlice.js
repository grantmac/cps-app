import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = __DEV__
  ? "http://localhost:3000/v1"
  : "https://0ykx831wdj.execute-api.us-east-1.amazonaws.com/v1";

export const chargeSlice = createSlice({
  name: "charge",
  initialState: {
    status: null,
    error: null,
    chargeData: null,
  },
  reducers: {
    // loadChargers: (state, action) => {},
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(startCharge.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(startCharge.fulfilled, (state, action) => {
        state.status = "connected";
        state.error = null;
        if (action.payload.data.status == false) {
          state.error = {
            code: action.payload.data.status_code,
            message: action.payload.data.message,
          };
          state.status = null;
        } else {
          state.chargeData = action.payload.data;
        }
      })
      .addCase(startCharge.rejected, (state, action) => {
        state.status = "error";
        state.status = null;
        console.log(action);
      });
  },
});

export const {} = chargeSlice.actions;

export const startCharge = createAsyncThunk(
  //action type string
  "charge/start",
  // callback function
  async ({ chargerId, connector, token }) => {
    console.log(chargerId, connector, token);
    console.log(`${api_url}/start`);
    let startReq = await axios.post(`${api_url}/startCharge`, {
      chargepoint: chargerId,
      connector: connector,
      username: "grant",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE4YTk1YTkzMjA1ZGU5Y2E3MjQwNDgxNDI1NGY5YmFmZjY1MDVhMzAxYjFhMzkxYjU1MzE0MDRlMWI0NjVhMWZlZGM0NGZlMTkzNGI5MTMxIn0.eyJhdWQiOiI0NzhmYjFiYS03OThkLTRlMzMtYmE0Ny04YjI0ZjBmMmQzMGIiLCJqdGkiOiIxOGE5NWE5MzIwNWRlOWNhNzI0MDQ4MTQyNTRmOWJhZmY2NTA1YTMwMWIxYTM5MWI1NTMxNDA0ZTFiNDY1YTFmZWRjNDRmZTE5MzRiOTEzMSIsImlhdCI6MTY1NzExNjcxNywibmJmIjoxNjU3MTE2NzE3LCJleHAiOjE2NTcxMjAzMTcsInN1YiI6IjQwOTM1Iiwic2NvcGVzIjpbImF1dGhlbnRpY2F0ZWQiLCJkcml2ZXIiXX0.P9tyX8XUO5VMzW07EkDJctyEB07lkSyNJPY8-cTxp3fDJ6bP1kUwfY3YYo9vM0j-QjppnPuEXMPe-CeEo4reXGIJ86x4grZVlPifSUA-Dlh7s0KFuiIOKDn9zo6QOrX45aPzHN_qIbLsBW0Ok8ePI0RRnyGjKEJjIYujx1JMxCt3kLfTgnQ5m1-eYeYbEHs_lQGvKEw2uthIg2kdz2D3cu014sH3BY4-LESea-5ONEeA4f03-61AX61g9ABog4LuWZ-s0eVoXP5lX0_GHvR-3gEWKo8qTFsi1K0Ikx0H1WXZHBXGdvF64dKqoVlKCpCXLzHMm8JJGmzoYmVZLK3ogQ",
    });
    return startReq;
  }
);

export default chargeSlice.reducer;
