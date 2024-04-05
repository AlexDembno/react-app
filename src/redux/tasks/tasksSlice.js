import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",

  initialState: tasksInitialState,

  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

// Генератори екшенів
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// Редюсер слайсу
export const tasksReducer = tasksSlice.reducer;
