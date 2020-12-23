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
      !remaining &&
        toggleError(true, "You have exceeded your hourly rate Limit");
      setRequest(remaining);
    });
  };
  const setUserInfo = (user, followers, repos) => {
    setgitHubUser(user.data);
    setfollowers(followers.data);
    setRepos(repos.data);
  };
  const searchUser = async (username) => {
    if (!username.trim()) return toggleError(true, "Invalid Username !");
    toggleError();
    setLoading(true);
    try {
      const promisesList = [
        axios(`/users/${username}`),
        axios(`/users/${username}/followers?per_page=50`),
        axios(`/users/${username}/repos?per_page=100`),
      ];
      const result = await Promise.all(promisesList);
      console.log("RESULT ", result);
      setUserInfo(...result);
    } catch (exception) {
      toggleError(true, "Invalid Username !");
    } finally {
      setLoading(false);
    }
  };
  const toggleError = (show = false, message = "") => {
    setError({ show, message });
  };
  useEffect(checkRemainingRequests, []);
  const [gitHubUser, setgitHubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setfollowers] = useState(mockFollowers);
  const [Request, setRequest] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  return (
    <GitHubContext.Provider
      value={{
        gitHubUser,
        repos,
        followers,
        Request,
        error,
        searchUser,
        isLoading,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};
export { GitHubContext, GitHubProvider };
