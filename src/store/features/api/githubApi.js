import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
export const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export const githubApiService = createApi({
  reducerPath: "api",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  keepUnusedDataFor: 0,
  endpoints: (builder) => ({
    getInitUsers: builder.query({
      query: (limit = 100) => ({
        url: `/users`,
        params: {
          client_id: githubClientId,
          client_secret: githubClientSecret,
          per_page: limit,
        },
      }),
    }),
    getSearchedUsers: builder.query({
      query: (searchQuery, limit = 100, page = 1) => ({
        url: `/search/users`,
        params: {
          q: searchQuery,
          client_id: githubClientId,
          client_secret: githubClientSecret,
          per_page: limit,
          page,
        },
      }),
    }),
  }),
});

export const { useGetInitUsersQuery, useGetSearchedUsersQuery } = githubApiService;
