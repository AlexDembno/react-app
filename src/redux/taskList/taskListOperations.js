import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllTaskLists,
  addTaskList,
  deleteTaskList,
} from "../../shared/services/api/tasksList";

export const fetchAlltaskList = createAsyncThunk(
  "tasksList/getAll",
  async (childId, thunkAPI) => {
    try {
      const response = await getAllTaskLists(childId);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(
        response?.data || "Failed to load task lists"
      );
    }
  }
);

export const fetchAddtaskList = createAsyncThunk(
  "tasksList/addTaskList",
  async (taskList, thunkAPI) => {
    try {
      const response = await addTaskList(taskList);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchDeleteTaskList = createAsyncThunk(
  "tasksList/deleteTaskList",
  async (id, thunkAPI) => {
    try {
      const response = await deleteTaskList(id);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
