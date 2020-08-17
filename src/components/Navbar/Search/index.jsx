import React from "react";
import "./Search.scss";

export default function Search() {
  return (
    <form className="search-container">
      <label className="search-label" hidden htmlFor="search-field">
        Search
      </label>
      <input type="text" name="Search" id="search-field" placeholder="Search Repositories..." />
    </form>
  );
}
