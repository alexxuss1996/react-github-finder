import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApiService } from "./features/api/githubApi";
import paginationReducer from "./features/pagination/paginationSlice";
import searchReducer from "./features/search/searchSlice";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    search: searchReducer,
    [githubApiService.reducerPath]: githubApiService.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApiService.middleware),
});

setupListeners(store.dispatch);
