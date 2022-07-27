import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchQuery: "",
  isSearching: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = Boolean(action.payload);
    },
    resetSearchQuery: (state) => {
      state.searchQuery = "";
    },
  },
});

export const { setSearchQuery, setIsSearching, resetSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
