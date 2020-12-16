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
      let {
        rate: { remaining },
      } = data;
      remaining = 0;
      !remaining &&
        toggleError(true, "You have exceeded your hourly rate Limit");
      setRequest(remaining);
    });
  };
  useEffect(checkRemainingRequests, []);
  const toggleError = (show = false, message = "") => {
    setError({ show, message });
  };
  const [gitHubUser, setgitHubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setfollowers] = useState(mockFollowers);
  const [Request, setRequest] = useState(0);
  const [error, setError] = useState({ show: false, message: "" });
  return (
    <GitHubContext.Provider
      value={{ gitHubUser, repos, followers, Request, error }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
export { GitHubContext, GitHubProvider };
