import { createAsyncThunk } from "@reduxjs/toolkit";

import { kidsLogin } from "../../shared/services/api/kids";

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
