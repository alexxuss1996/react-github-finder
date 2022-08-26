import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import { GoMarkGithub } from "react-icons/go";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <GoMarkGithub className="gh-icon" />
      Github Finder
    </Link>
  );
}
