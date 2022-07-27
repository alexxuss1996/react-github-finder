import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentPage: 1,
  perPage: 10,
  numberOfPages: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    resetCurrentPage: (state) => {
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = Number.parseInt(action.payload);
    },
    incrementCurrentPage: (state) => {
      state.currentPage = state.currentPage + 1;
    },
    decrementCurrentPage: (state) => {
      state.currentPage = state.currentPage - 1;
    },
    setNumberOfPages: (state, action) => {
      state.numberOfPages = Number.parseInt(action.payload);
    },
    resetNumberOfPages: (state) => {
      state.numberOfPages = 0;
    },
  },
});

export const {
  setCurrentPage,
  resetCurrentPage,
  incrementCurrentPage,
  decrementCurrentPage,
  setNumberOfPages,
  resetNumberOfPages,
} = paginationSlice.actions;
export default paginationSlice.reducer;
