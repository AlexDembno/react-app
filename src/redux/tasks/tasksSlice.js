import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",

  initialState: tasksInitialState,

  reducers: {
    addTask: {
      reducer(state, action) {
        console.log(action.payload);
        state.push(action.payload);
      },
      prepare(tasks) {
        return {
          payload: {
            ...tasks,
            id: nanoid(),
          },
        };
      },
    },

    deleteTask(state, action) {
      console.log("action.payload", action.payload);
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {},
  },
});

// Генератори екшенів
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// Редюсер слайсу
export const tasksReducer = tasksSlice.reducer;
