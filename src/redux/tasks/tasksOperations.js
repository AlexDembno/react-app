import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../shared/services/api/tasks";
import { getAllTasks } from "../../shared/services/api/tasks";

export const fetchAlltasks = createAsyncThunk(
  "tasks/getAll",
  async (_, thunkAPI) => {
    try {
      console.log("fetchAlltasks");
      const response = await getAllTasks();
      console.log("datafetch", response);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
