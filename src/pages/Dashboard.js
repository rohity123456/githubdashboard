import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GitHubContext } from "../context/context";
const Dashboard = () => {
  const value = useContext(GitHubContext);
  return (
    <main>
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
