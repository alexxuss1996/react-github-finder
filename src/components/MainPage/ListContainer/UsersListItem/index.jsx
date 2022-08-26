import React from "react";
import { Link } from "react-router-dom";
import "./UsersListItem.scss";

export default function UsersListItem({ login, userURL, avatarURL }) {
  return (
    <li className="users-list-item">
      <a className="users-list-item-name" href={userURL}>
        {login}
      </a>
      <img src={avatarURL} className="user-avatar" alt={login} />
      <Link to={`/users/${login}`} className="btn btn-primary">
        View Profile
      </Link>
    </li>
  );
}
