import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <main className="error-container">
      <div className="loading">Oops, this page don't exist! </div>
      <Link className="error-link" to="/">
        Go to main page
      </Link>
    </main>
  );
};

export default NotFound;
