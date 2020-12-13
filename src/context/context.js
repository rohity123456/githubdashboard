import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GitHubContext = createContext();

const GitHubProvider = ({ children }) => {
  const [gitHubUser, setgitHubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setfollowers] = useState(mockFollowers);
  return (
    <GitHubContext.Provider value={{ gitHubUser, repos, followers }}>
      {children}
    </GitHubContext.Provider>
  );
};
export { GitHubContext, GitHubProvider };
