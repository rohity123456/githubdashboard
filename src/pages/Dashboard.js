import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import { GitHubContext } from "../context/context";
import ErrorContainer from "../components/ErrorContainer";
import Loading from "../components/Loading";
const Dashboard = () => {
  const {
    error: { show, message },
    isLoading,
  } = useContext(GitHubContext);
  console.log("isLoading ", isLoading);
  return isLoading ? (
    <main>
      <Search />
      <Loading />
    </main>
  ) : (
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
