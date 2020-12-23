import React, { useContext } from "react";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GitHubContext } from "../context/context";
import HF from "../common/Helper";
const UserInfo = () => {
  const { gitHubUser } = useContext(GitHubContext);
  const { public_repos, public_gists, followers, following } = gitHubUser;
  const Items = [
    {
      icon: <GoRepo className="icon" />,
      id: "1",
      label: "Repos",
      value: public_repos,
      color: "pink",
    },
    {
      icon: <GoGist className="icon" />,
      id: "2",
      label: "Gist",
      value: public_gists,
      color: "green",
    },
    {
      icon: <FiUsers className="icon" />,
      id: "3",
      label: "Followers",
      value: followers,
      color: "purple",
    },
    {
      icon: <FiUserPlus className="icon" />,
      id: "4",
      label: "Following",
      value: following,
      color: "yellow",
    },
  ];
  const Item = ({ icon, label, value, color }) => (
    <div className={"item " + color}>
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
  return (
    <section className="section">
      <Wrapper className="section-center">
        {Items.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem 2rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(260px, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
