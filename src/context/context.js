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
    setgitHubUser(user);
    setfollowers(followers);
    setRepos(repos);
  };
  const searchUser = async (username) => {
    setLoading(true);
    if (!username.trim()) return toggleError(true, "Invalid Username !");
    toggleError();
    try {
      const { data: user } = await axios(`/users/${username}`);
      const { data: followers } = await axios(`/users/${username}/followers`);
      const { data: repos } = await axios(
        `/users/${username}/repos?per_page=100`
      );
      setUserInfo(user, followers, repos);
    } catch (exception) {
      toggleError(true, "Invalid Username !");
    } finally {
      setLoading(false);
    }
  };
  useEffect(checkRemainingRequests, []);
  const toggleError = (show = false, message = "") => {
    setError({ show, message });
  };
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
