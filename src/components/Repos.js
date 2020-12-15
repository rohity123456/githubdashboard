import React, { memo, useContext } from "react";
import styled from "styled-components";
import HF from "../common/Helper";
import { GitHubContext } from "../context/context";
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from "./Charts";
const Repos = () => {
  const { repos } = useContext(GitHubContext);
  console.log(repos);
  const mostUsedLangList = HF.getMostUsedList(repos, "language");
  const mostStarredLangList = HF.getMostUsedList(
    repos,
    "language",
    "stargazers_count"
  );
  console.log("MOSTSTARREDLANGLIST ", mostStarredLangList);
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsedLangList} />
        <div></div>
        <Doughnut2D data={mostStarredLangList} />
        <div></div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  min-width: 400px;
  min-height: 300px;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
    min-height: 400px;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default memo(Repos);
