import React, { useState, useEffect } from "react";
import "./ReposContainer.scss";
import RepoItem from "./RepoItem";

const ReposContainer = ({ repos }) => {
  const popularRepos = repos?.slice(0, 10);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    let abortController = new AbortController();
    (async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json", {
          signal: abortController?.signal,
        });
        const data = await response?.json();
        setColors(data);
        abortController = null;
      } catch (e) {
        console.error(e?.message);
      }
    })();

    return () => {
      abortController?.abort();
    };
  }, []);

  return (
    <ul className="repos-container">
      {popularRepos?.map((repo) => (
        <RepoItem
          key={repo.id}
          name={repo.name}
          language={repo.language}
          languageColor={colors[repo.language]?.color}
          repoURL={repo.html_url}
          stars={repo.stargazers_count}
          description={repo.description}
          forks={repo.forks_count}
          watchers={repo.watchers_count}
          created={repo.created_at}
        />
      ))}
    </ul>
  );
};

export default ReposContainer;
