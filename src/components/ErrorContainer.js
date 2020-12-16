import React from "react";
import styled from "styled-components";
import { MdError } from "react-icons/md";
function ErrorContainer({ message }) {
  return (
    <section>
      <ErrorWrapper>
        <MdError />
        <p>{message}</p>
      </ErrorWrapper>
    </section>
  );
}
const ErrorWrapper = styled.article`
  text-transform: capitalize;
  padding: 1rem 2rem 0 2rem;
  display: flex;
  align-items: center;
  color: red;
  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 10px;
  }
  p {
    color: red;
    margin: 0;
    letter-spacing: var(--spacing);
  }
`;
export default ErrorContainer;
