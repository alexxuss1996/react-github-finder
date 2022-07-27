import React from "react";
import "./UsersListItem.scss";

export default function UsersListItem({ name, userUrl, avatarUrl }) {
  return (
    <li className="users-list-item">
      <a className="users-list-item-name" href={userUrl}>
        {name}
      </a>
      <img src={avatarUrl} className="user-avatar" alt={name} />
      <button type="button" className="btn btn-primary">
        View Profile
      </button>
    </li>
  );
}
