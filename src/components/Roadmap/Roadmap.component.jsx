import React from "react";
import styled from "styled-components";

import SectionWrapper from "../SectionWrapper/SectionWrapper.component";

const Roadmap = () => {
  return (
    <SectionWrapper>
      <RoadmapWrapper>
        <h3>2022 ROADMAP – UXP TOKEN</h3>
        <h1>STAKING. GOVERNANCE. REWARDS. DAO. MORE.</h1>
        <span>COMING SOON</span>
      </RoadmapWrapper>
    </SectionWrapper>
  );
};

export default Roadmap;

const RoadmapWrapper = styled.div`
  width: 100%;
  padding: 3.8125rem 0;
  background-color: var(--color-black);
  border: 1px solid var(--color-border);
  border-radius: 1.125rem;
  box-shadow: inset 0 0.75rem 1.75rem 0.75rem var(--color-black);
  text-align: center;

  h3 {
    font-size: 1.5625rem;
    font-weight: var(--text-medium);
    color: var(--color-secondary);
  }

  h1 {
    margin: 0.5rem 0 3.3125rem 0;
    font-size: 1.5625rem;
    font-weight: var(--text-regular);
    text-shadow: 0px 0px 0.4375rem rgba(255, 255, 255, 0.25);
  }

  span {
    letter-spacing: 0.18rem;
    font-size: 1.125rem;
    font-family: var(--font-politica);
    font-weight: var(--display-bold);
  }
`;
