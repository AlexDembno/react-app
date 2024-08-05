import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "../../shared/services/api/tasks";
import {
  getAllTasks,
  addTask,
  deleteTask,
  changeStatusTask,
  editTask,
} from "../../shared/services/api";

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

export const fetchDeleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkAPI) => {
    try {
      const response = await deleteTask(id);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchChangeStatusTask = createAsyncThunk(
  "tasks/changeStatusTask",
  async (newStatus, thunkAPI) => {
    try {
      const response = await changeStatusTask(newStatus);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchEditTask = createAsyncThunk(
  "tasks/editTask",
  async (newTask, thunkAPI) => {
    try {
      const response = await editTask(newTask);
      return response;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

