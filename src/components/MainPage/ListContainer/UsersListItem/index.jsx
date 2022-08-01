import React from "react";
import { Link } from "react-router-dom";
import "./UsersListItem.scss";

export default function UsersListItem({ name, userURL, avatarURL }) {
  return (
    <li className="users-list-item">
      <a className="users-list-item-name" href={userURL}>
        {name}
      </a>
      <img src={avatarURL} className="user-avatar" alt={name} />
      <Link to="/" className="btn btn-primary">
        View Profile
      </Link>
    </li>
  );
}
