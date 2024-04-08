import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toChangeStatusModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalIsOpen(state, action) {
      state.toChangeStatusModal = action.payload;
    },
    modalIsClose(state, action) {
      state.toChangeStatusModal = action.payload;
    },
  },
});

// Генератори екшенів
export const { modalIsOpen, modalIsClose } = modalSlice.actions;
// Редюсер слайсу
export const modalReducer = modalSlice.reducer;
