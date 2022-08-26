import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserProfileQuery, useGetUserReposQuery } from "../../store/features/api/githubApi";
import { FaArrowLeft } from "react-icons/fa";
import ProfileInfo from "./ProfileInfo";
import ProfileRepos from "./ProfileRepos";
import ProfileCard from "./ProfileInfo/ProfileCard";
import Button from "../Button";
import "./ProfilePage.scss";
import Spinner from "../Spinner";

const ProfilePage = () => {
  const navigation = useNavigate();
  const { login } = useParams();
  const { data: user } = useGetUserProfileQuery(login);
  const { data: userRepos } = useGetUserReposQuery(login);

  const goBack = () => navigation(-1);

  return (
    <main className="main-container profile-page">
      <div className="container flex-container">
        <ProfileInfo>
          <Button name="back" className="btn btn-primary btn-back" onClick={goBack}>
            <FaArrowLeft className="back-icon" /> Back
          </Button>
          {user ? (
            <ProfileCard
              fullname={user.name}
              avatar_url={user.avatar_url}
              htmlURL={user.html_url}
              login={user.login}
              bio={user.bio}
              email={user.email}
              blog={user.blog}
              location={user.location}
              twitterUsername={user.twitter_username}
              followers={user.followers}
              following={user.following}
              publicGists={user.public_gists}
              publicRepos={user.public_repos}
              createdAt={user.created_at}
            />
          ) : (
            <Spinner />
          )}
        </ProfileInfo>
        {userRepos ? <ProfileRepos repos={userRepos} login={user?.login} /> : <Spinner />}
      </div>
    </main>
  );
};

export default ProfilePage;
