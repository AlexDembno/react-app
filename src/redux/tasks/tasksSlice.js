import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAlltasks,
  fetchAddTasks,
  fetchDeleteTask,
  fetchChangeStatusTask,
  fetchEditTask,
} from "./tasksOperations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // addTask: {
    //   reducer({ items }, action) {
    //     items.push(action.payload);
    //   },
    //   prepare(tasks) {
    //     return {
    //       payload: {
    //         ...tasks,
    //         id: nanoid(),
    //       },
    //     };
    //   },
    // },

    // deleteTask({ items }, action) {
    //   return items.filter((task) => task.id !== action.payload);
    // },
    changeStatus({ items }, action) {
      // const index = items.findIndex((task) => task.id === action.payload.id);
      // const result = items.find((task) => task.id === action.payload.id);
      // const updatedTask = {
      //   ...result,
      //   status: action.payload.name,
      // };
      // return [...items.slice(0, index), updatedTask, ...items.slice(index + 1)];
    },
    // editTask({ items }, action) {
    //   const altTask = items.find((task) => task.id === action.payload.taskId);
    //   const newTask = {
    //     ...altTask,
    //     name: action.payload?.name || altTask.name,
    //     description: action.payload?.description || altTask.description,
    //     priority: action.payload?.priority || altTask.priority,
    //     startDate: action.payload?.startDate || altTask.startDate,
    //   };
    //   const index = items.findIndex(
    //     (task) => task.id === action.payload.taskId
    //   );
    //   return [...items.slice(0, index), newTask, ...items.slice(index + 1)];
    // },
    editTask(state, action) {
      const task = state.items.find(
        (task) => task.id === action.payload.taskId
      );
      if (task) {
        task.name = action.payload?.name || task.name;
        task.description = action.payload?.description || task.description;
        task.priority = action.payload?.priority || task.priority;
        task.startDate = action.payload?.startDate || task.startDate;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlltasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAlltasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAlltasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAddTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddTasks.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAddTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchDeleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchDeleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchChangeStatusTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChangeStatusTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchChangeStatusTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchEditTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEditTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchEditTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addTask, deleteTask, changeStatus, editTask } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
