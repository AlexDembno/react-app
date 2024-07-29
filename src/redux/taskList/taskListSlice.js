import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchAlltaskList, fetchAddtaskList } from "./taskListOperations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const taskListSlice = createSlice({
  name: "taskList",
  initialState,

  reducers: {
    // addListTask: {
    //   reducer(state, action) {
    //     console.log("action.payload", action.payload);
    //     state.items.push(action.payload);
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

    deleteListTask(state, action) {
      const index = state.items.findIndex(
        (tasksList) => tasksList.id === action.payload
      );
      state.items.splice(index, 1);
    },
    toggleListCompleted(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlltaskList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAlltaskList.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAlltaskList.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      })
      .addCase(fetchAddtaskList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddtaskList.fulfilled, (state, action) => {
        console.log("action.payload", action.payload);
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAddtaskList.rejected, (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
      });
  },
});

// Генератори екшенів
export const { addListTask, deleteListTask, toggleListCompleted } =
  taskListSlice.actions;
// Редюсер слайсу
export const tasksListReducer = taskListSlice.reducer;
