import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../../MainPage";
import "./Logo.scss";

export default function Logo() {
  return (
    <Link to={<MainPage />} className="logo">
      Github Finder
    </Link>
  );
}
