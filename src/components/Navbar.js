import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const {
    // Auth state:
    error,
    isAuthenticated,
    isLoading,
    user,
    // Auth methods:
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
    loginWithRedirect,
    loginWithPopup,
    logout,
  } = useAuth0();
  const toggleTheme = (e) => {
    Array.from(document.getElementsByTagName("img")).forEach((img) => {
      img.style.filter = e.target.checked ? "invert(1) hue-rotate(180deg)" : "";
    });
    const html = document.querySelector("html");
    html.style = e.target.checked
      ? "background: rgb(0, 0, 0); filter: invert(1) hue-rotate(180deg)"
      : "";
    html.style.transition = "0.2s all ease-in";
  };
  return (
    isAuthenticated &&
    user && (
      <Wrapper>
        <img src={user.picture} alt="" />
        <h4>{user.name}</h4>
        <button onClick={logout}>Logout</button>
        <input type="checkbox" className="toggle" onChange={toggleTheme} />
      </Wrapper>
    )
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  position: relative;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    text-transform: none;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  input {
    position: absolute;
    right: 10px;
  }
`;

export default Navbar;
