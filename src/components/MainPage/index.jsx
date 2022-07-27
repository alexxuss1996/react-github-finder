import React from "react";
import ListContainer from "./ListContainer";
import Paginator from "./Paginator";

export default function MainPage() {
  return (
    <main className="main-container">
      <div className="container">
        <ListContainer />
        <Paginator />
      </div>
    </main>
  );
}
