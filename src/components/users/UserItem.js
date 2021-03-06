import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <li className="card text-center">
      <img src={avatar_url} alt={login} className="round-img" style={{ width: '60px' }} />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          View Profile
        </a>
      </div>
    </li>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
