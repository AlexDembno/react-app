import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchAlltasks } from "./tasksOperations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  // reducers: {
  //   addTask: {
  //     reducer({ items }, action) {
  //       items.push(action.payload);
  //     },
  //     prepare(tasks) {
  //       return {
  //         payload: {
  //           ...tasks,
  //           id: nanoid(),
  //         },
  //       };
  //     },
  //   },

  //   deleteTask({ items }, action) {
  //     return items.filter((task) => task.id !== action.payload);
  //   },
  //   changeStatus({ items }, action) {
  //     const index = items.findIndex((task) => task.id === action.payload.id);
  //     const result = items.find((task) => task.id === action.payload.id);
  //     const updatedTask = {
  //       ...result,
  //       status: action.payload.name,
  //     };
  //     return [...items.slice(0, index), updatedTask, ...items.slice(index + 1)];
  //   },
  //   // editTask({ items }, action) {
  //   //   const altTask = items.find((task) => task.id === action.payload.taskId);
  //   //   const newTask = {
  //   //     ...altTask,
  //   //     name: action.payload?.name || altTask.name,
  //   //     description: action.payload?.description || altTask.description,
  //   //     priority: action.payload?.priority || altTask.priority,
  //   //     startDate: action.payload?.startDate || altTask.startDate,
  //   //   };
  //   //   const index = items.findIndex(
  //   //     (task) => task.id === action.payload.taskId
  //   //   );
  //   //   return [...items.slice(0, index), newTask, ...items.slice(index + 1)];
  //   // },
  //   editTask(state, action) {
  //     const task = state.items.find(
  //       (task) => task.id === action.payload.taskId
  //     );
  //     if (task) {
  //       task.name = action.payload?.name || task.name;
  //       task.description = action.payload?.description || task.description;
  //       task.priority = action.payload?.priority || task.priority;
  //       task.startDate = action.payload?.startDate || task.startDate;
  //     }
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlltasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAlltasks.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAlltasks.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      });
  },
});

export const { addTask, deleteTask, changeStatus, editTask } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
