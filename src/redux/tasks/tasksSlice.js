import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: "tasks",

  initialState: tasksInitialState,

  reducers: {
    addTask: {
      reducer(state, action) {
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
      return state.filter((task) => task.id !== action.payload);
    },
    changeStatus(state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      const result = state.find((task) => task.id === action.payload.id);
      const updatedTask = {
        ...result,
        status: action.payload.name,
      };
      return [...state.slice(0, index), updatedTask, ...state.slice(index + 1)];
    },
    editTask(state, action) {
      const altTask = state.find((task) => task.id === action.payload.taskId);
      const newTask = {
        ...altTask,
        name: action.payload?.name || altTask.name,
        description: action.payload?.description || altTask.description,
        priority: action.payload?.priority || altTask.priority,
        startDate: action.payload?.startDate || altTask.startDate,
      };
      const index = state.findIndex(
        (task) => task.id === action.payload.taskId
      );
      return [...state.slice(0, index), newTask, ...state.slice(index + 1)];
    },
  },
});

export const { addTask, deleteTask, changeStatus, editTask } =
  tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
