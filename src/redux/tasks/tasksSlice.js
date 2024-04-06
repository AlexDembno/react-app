import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",

  initialState: tasksInitialState,

  reducers: {
    addTask(state, action) {
      console.log("action.payload", action.payload);
      state.push(action.payload);
    },
    prepare(text) {
      return {
        payload: {
          text,
          id: nanoid(),
          completed: false,
        },
      };
    },

    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

// Генератори екшенів
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// Редюсер слайсу
export const tasksReducer = tasksSlice.reducer;
