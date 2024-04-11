import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksListInitialState = [];

const taskListSlice = createSlice({
  name: "taskList",
  initialState: tasksListInitialState,

  reducers: {
    addListTask: {
      reducer(state, action) {
        console.log("action.payload", action.payload);
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

    deleteListTask(state, action) {
      const index = state.findIndex(
        (tasksList) => tasksList.id === action.payload
      );
      state.splice(index, 1);
    },
    toggleListCompleted(state, action) {},
  },
});

// Генератори екшенів
export const { addListTask, deleteListTask, toggleListCompleted } =
  taskListSlice.actions;
// Редюсер слайсу
export const tasksListReducer = taskListSlice.reducer;
