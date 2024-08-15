import { createAsyncThunk } from "@reduxjs/toolkit";

import { register, login } from "../../shared/services/api/auth";

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await register(data);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await login(data);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
