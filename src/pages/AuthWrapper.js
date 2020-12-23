import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import styled from "styled-components";
import Loading from "../components/Loading";
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  console.log("CHILDREN ", children);
  if (isLoading) return <Loading />;
  if (error)
    return (
      <Wrapper>
        <h4>{error?.message}</h4>
      </Wrapper>
    );
  return <> {children} </>;
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  img {
    width: 150px;
  }
`;

export default AuthWrapper;
