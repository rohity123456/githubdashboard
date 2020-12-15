import React, { useState, useEffect, createContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";
axios.defaults.baseURL = "https://api.github.com";

const GitHubContext = createContext();

const GitHubProvider = ({ children }) => {
  const checkRemainingRequests = () => {
    axios.get("/rate_limit").then(({ data }) => {
      const {
        rate: { remaining },
      } = data;
      setRequest(remaining);
    });
  };
  useEffect(checkRemainingRequests, []);
  const [gitHubUser, setgitHubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setfollowers] = useState(mockFollowers);
  const [Request, setRequest] = useState(0);
  return (
    <GitHubContext.Provider value={{ gitHubUser, repos, followers, Request }}>
      {children}
    </GitHubContext.Provider>
  );
};
export { GitHubContext, GitHubProvider };
