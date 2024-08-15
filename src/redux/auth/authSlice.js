import { createSlice } from "@reduxjs/toolkit";
import { fetchRegister, fetchLogin } from "./authOperations";

const initialState = {
  token: "",
  isLogin: false,
  loading: false,
  error: null,
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
        console.log("action", action.payload);

        state.loading = false;
        state.isLogin = true;
        state.token = action.payload;
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
        state.token = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
