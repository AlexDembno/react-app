import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  register,
  login,
  logout,
  current,
} from "../../shared/services/api/auth";

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

export const fetchCurrent = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();

      const response = await current(auth.accessToken);
      return response;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.accessToken) {
        return false;
      }
    },
  }
);

export const fetchLogout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await logout();
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
