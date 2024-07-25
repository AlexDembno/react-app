import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTaskLists } from "../../shared/services/api/tasksList";

export const fetchAlltaskList = createAsyncThunk(
  "tasksList/getAll",
  async (_, thunkAPI) => {
    console.log("fetchAlltaskList");
    try {
      console.log("fetchAlltaskListTry");
      const response = await getAllTaskLists();
      console.log("datafetch2", response);
      return response;
    } catch ({ response }) {
      console.log("error");
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
