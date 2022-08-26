import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex-container">
        <Logo />
        <Search />
      </div>
    </nav>
  );
}
