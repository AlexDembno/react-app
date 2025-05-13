import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRegister,
  fetchLogin,
  fetchCurrent,
  fetchLogout,
  fetchUserKids,
} from "./authOperations";

const initialState = {
  accessToken: "",
  userId: "",
  isLogin: false,
  loading: false,
  error: null,
  userKids: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.accessToken = action.payload.accessToken;
        state.userId = action.payload.userId;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.accessToken = action.payload.accessToken;
        state.userId = action.payload.userId;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrent.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.accessToken = action.payload.accessToken;
        state.userId = action.payload.userId;
      })
      .addCase(fetchCurrent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = false;
        state.accessToken = "";
        state.userId = "";
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserKids.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserKids.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);

        state.loading = false;
        state.userKids = action.payload;
      })
      .addCase(fetchUserKids.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
