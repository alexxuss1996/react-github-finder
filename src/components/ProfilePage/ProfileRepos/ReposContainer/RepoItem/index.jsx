import React from "react";
import { format, parseISO } from "date-fns";
import { FaRegStar, FaRegEye } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import "./RepoItem.scss";

const RepoItem = ({ name, language, languageColor, description, repoURL, stars, forks, watchers, created }) => {
  return (
    <li className="repo-item">
      <div className="item-top-line">
        <a href={repoURL} className="repo-link">
          {name}
        </a>
        <span className="repo-created">{format(parseISO(created), "dd MMMM yyyy")}</span>
      </div>
      <p className="repo-description">{description}</p>
      <div className="item-bottom-line">
        {language && (
          <span className="repo-language">
            <span className="language-color" style={{ backgroundColor: languageColor ?? "transparent" }}></span>
            <div className="language-name">{language}</div>
          </span>
        )}
        <div className="repo-stars">
          <FaRegStar /> {stars}
        </div>
        <div className="repo-forks">
          <BiGitRepoForked /> {forks}
        </div>
        <div className="repo-watchers">
          <FaRegEye /> {watchers}
        </div>
      </div>
    </li>
  );
};

export default RepoItem;
