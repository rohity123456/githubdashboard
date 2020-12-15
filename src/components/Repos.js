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
  let { famousrepos, forked } = repos.reduce(
    (total, repository) => {
      const { stargazers_count, forks, name } = repository;
      total.famousrepos[name] = {
        label: name,
        value: stargazers_count,
      };
      total.forked[name] = {
        label: name,
        value: forks,
      };

      return total;
    },
    {
      famousrepos: {},
      forked: {},
    }
  );
  famousrepos = HF.convertToArray(famousrepos, "value");
  forked = HF.convertToArray(forked, "value");
  console.log(famousrepos, forked);
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsedLangList} />
        <Column3D data={famousrepos} />
        <Doughnut2D data={mostStarredLangList} />
        <Bar3D data={forked} />
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
