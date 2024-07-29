import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../shared/services/api/tasks";
import { getAllTasks, addTask } from "../../shared/services/api/tasks";

export const fetchAlltasks = createAsyncThunk(
  "tasks/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await getAllTasks();
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddTasks = createAsyncThunk(
  "tasks/AddTasks",
  async (task, thunkAPI) => {
    try {
      const response = await addTask(task);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
