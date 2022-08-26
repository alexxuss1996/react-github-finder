import React from "react";
import ListContainer from "./ListContainer";
import Paginator from "./Paginator";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

export default function MainPage() {
  const { currentPage, numberOfPages } = useSelector((state) => state.pagination);
  return (
    <>
      <Navbar />
      <main className="main-container">
        <div className="container flex-container--column  user-pagination-wrapper">
          <ListContainer />
          <Paginator currentPage={currentPage} numberOfPages={numberOfPages} />
        </div>
      </main>
    </>
  );
}
