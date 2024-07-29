import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllTaskLists,
  addTaskList,
} from "../../shared/services/api/tasksList";

export const fetchAlltaskList = createAsyncThunk(
  "tasksList/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await getAllTaskLists();
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddtaskList = createAsyncThunk(
  "tasksList/addTaskList",
  async (taskList, thunkAPI) => {
    try {
      const response = await addTaskList(taskList);
      console.log("response", response);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
