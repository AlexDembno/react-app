import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAddKids,
  fetchKidsLogin,
  fetchKidsLogout,
} from "./kidsOperations";

const initialState = {
  kidsAccessToken: "",
  isKidsLogin: false,
  loading: false,
  error: null,
};

const kidsSlice = createSlice({
  name: "kids",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddKids.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddKids.fulfilled, (state, action) => {
        console.log("action", action.payload.kidsAccessToken);

        state.loading = false;
        state.isKidsLogin = false;
        state.kidsAccessToken = "";
      })
      .addCase(fetchAddKids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchKidsLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchKidsLogin.fulfilled, (state, action) => {
        console.log("action.payload.accessToken", action.payload.accessToken);

        state.loading = false;
        state.isKidsLogin = true;
        state.kidsAccessToken = action.payload.accessToken;
      })
      .addCase(fetchKidsLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchKidsLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchKidsLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.isKidsLogin = false;
        state.kidsAccessToken = "";
      })
      .addCase(fetchKidsLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const kidsReduser = kidsSlice.reducer;
