import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  kidsLogin,
  kidsCurrent,
  kidsLogout,
} from "../../shared/services/api/kids";

import { addKids } from "../../shared/services/api/auth";

export const fetchAddKids = createAsyncThunk(
  "kids/addKids",
  async (data, thunkAPI) => {
    try {
      const response = await addKids(data);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchKidsLogin = createAsyncThunk(
  "kids/login",
  async (data, thunkAPI) => {
    try {
      const response = await kidsLogin(data);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchKidsCurrent = createAsyncThunk(
  "kids/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { kids } = getState();
      const response = await kidsCurrent(kids.kidsAccessToken);
      return response;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { kids } = getState();
      if (!kids.kidsAccessToken) {
        return false;
      }
    },
  }
);

export const fetchKidsLogout = createAsyncThunk(
  "kids/logout",
  async (_, thunkAPI) => {
    try {
      const response = await kidsLogout();
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
