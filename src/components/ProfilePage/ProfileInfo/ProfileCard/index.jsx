import React from "react";
import { parseISO, format } from "date-fns";
import { FaUsers, FaUserFriends, FaAt, FaHome, FaTwitter, FaLink } from "react-icons/fa";
import { startUrlWithHttps } from "../../../../functions";
import "./ProfileCard.scss";

const ProfileCard = ({
  fullname,
  avatar_url,
  htmlURL,
  login,
  bio,
  email,
  blog,
  location,
  twitterUsername,
  followers,
  following,
  publicGists,
  publicRepos,
  createdAt,
}) => {
  return (
    <section className="profile-card">
      <img src={avatar_url} alt={fullname} className="user-avatar" />
      <h2 className="user-fullname">{fullname}</h2>
      <a href={htmlURL}>
        <h3 className="user-login">{login}</h3>
      </a>
      <p className="user-bio">{bio}</p>
      <div className="user-follow-activity">
        <div className="user-followers">
          <FaUsers /> <span className="text-bold">{followers}</span> Followers
        </div>
        <div className="user-following">
          <FaUserFriends /> <span className="text-bold">{following}</span> Following
        </div>
      </div>

      <ul className="user-contacts">
        {email && (
          <li className="user-email">
            <FaAt /> <a href={`mailto:${email}`}>{email}</a>
          </li>
        )}
        {location && (
          <li className="user-location">
            <FaHome /> <a href={`http://google.com/maps/search/${location}`}>{location}</a>
          </li>
        )}
        {twitterUsername && (
          <li className="user-twitter-username">
            <FaTwitter />{" "}
            <a href={`https://twitter.com/${twitterUsername}`} target="_blank" rel="noopener noreferrer">
              {twitterUsername}
            </a>
          </li>
        )}
        {blog && (
          <li className="user-blog">
            <FaLink />{" "}
            <span className="text-bold">
              <a href={startUrlWithHttps(blog)} target="_blank" rel="noopener noreferrer">
                {blog}
              </a>
            </span>
          </li>
        )}
        <li className="user-created">
          Profile created: <span className="text-bold">{format(parseISO(createdAt), "dd MMMM yyyy")}</span>
        </li>
      </ul>

      <div className="bottom-line">
        <p className="user-repos">
          Public Repos: <span className="repos-count text-bold">{publicRepos}</span>
        </p>
        <p className="user-gists">
          Public Gists: <span className="gists-count text-bold">{publicGists}</span>
        </p>
      </div>
    </section>
  );
};

export default ProfileCard;
