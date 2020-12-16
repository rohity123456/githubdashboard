import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GitHubContext } from "../context/context";
import ErrorContainer from "../components/ErrorContainer";
const Dashboard = () => {
  const {
    error: { show, message },
  } = useContext(GitHubContext);
  return (
    <main>
      {show && <ErrorContainer message={message} />}
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
