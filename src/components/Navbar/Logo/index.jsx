import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../../MainPage";
import "./Logo.scss";
import { GoMarkGithub } from "react-icons/go";

export default function Logo() {
  return (
    <Link to={<MainPage />} className="logo">
      <GoMarkGithub />
      Github Finder
    </Link>
  );
}
