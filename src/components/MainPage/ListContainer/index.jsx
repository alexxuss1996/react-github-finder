import React, { useEffect } from "react";
import { useGetInitUsersQuery, useGetSearchedUsersQuery } from "../../../store/features/api/githubApi";
import UsersListItem from "./UsersListItem";
import "./ListContainer.scss";
import { useDispatch, useSelector } from "react-redux";
import { setNumberOfPages, resetNumberOfPages } from "../../../store/features/pagination/paginationSlice";
import { splitPages } from "../../../functions";

export default function ListContainer() {
  const dispatch = useDispatch();
  const { currentPage, perPage } = useSelector((state) => state.pagination);
  const { searchQuery, isSearching } = useSelector((state) => state.search);
  const { loading, error, data: initUsers } = useGetInitUsersQuery();
  const {
    loading: searchLoading,
    error: searchError,
    data: searchUsers,
  } = useGetSearchedUsersQuery(searchQuery, {
    skip: !isSearching,
  });

  const usersArray = isSearching ? searchUsers?.items : initUsers;

  const { pageSlice: currentUsers, pagesCount } = splitPages(usersArray, currentPage, perPage);

  useEffect(() => {
    if (!Number.isNaN(pagesCount)) {
      dispatch(setNumberOfPages(pagesCount));
    }

    return () => dispatch(resetNumberOfPages());
  }, [dispatch, pagesCount]);

  if (loading || searchLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (searchError) return <div className="error">{searchError}</div>;
  if (currentUsers?.length === 0) return <div className="loading">Nothing to show here :)</div>;
  return (
    <ul className="list-container">
      {currentUsers ? (
        currentUsers.map((user) => (
          <UsersListItem key={user.id} name={user.login} userURL={user.html_url} avatarURL={user.avatar_url} />
        ))
      ) : (
        <div className="loading">Loading</div>
      )}
    </ul>
  );
}
