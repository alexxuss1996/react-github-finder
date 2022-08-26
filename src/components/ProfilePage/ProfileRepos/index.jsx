import React from "react";
import "./ProfileRepos.scss";
import ReposContainer from "./ReposContainer";

const ProfileRepos = ({ repos, login }) => {
  return (
    <section className="profile-repos">
      <h2 className="profile-title">{login?.charAt(0).toUpperCase() + login?.slice(1)}'s most popular repositories</h2>
      <ReposContainer repos={repos} />
    </section>
  );
};

export default ProfileRepos;
