import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { resetCurrentPage } from "../../../store/features/pagination/paginationSlice";
import { resetSearchQuery, setIsSearching, setSearchQuery } from "../../../store/features/search/searchSlice";
import "./Search.scss";
export default function Search() {
  const searchInputRef = useRef(null, "input");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInputRef.current.value !== "") {
      dispatch(setSearchQuery(searchInputRef.current.value));
      dispatch(setIsSearching(true));
      dispatch(resetCurrentPage());
    }
    searchInputRef.current.focus();
  };

  const handleSearchReset = (e) => {
    dispatch(resetSearchQuery());
    dispatch(setIsSearching(false));
    dispatch(resetCurrentPage());
  };

  return (
    <form className="search-container" onSubmit={handleSearch} onReset={handleSearchReset}>
      <input ref={searchInputRef} type="text" name="search" id="search-field" placeholder="Search Github Users..." />
      <input type="submit" className="btn btn-secondary" value="Search" />
      <input type="reset" className="btn btn-red" value="Reset" />
    </form>
  );
}
