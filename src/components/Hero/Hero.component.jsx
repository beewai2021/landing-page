import React from "react";
import styled from "styled-components";

import UnstyledButton from "../GlobalStyles/UnstyledButton";

const Hero = () => {
  return (
    <div>
      <TitlesContainer>
        <Title>ALGORITHMIC</Title>
        <Title deltaNeutral>DELTA-NEUTRAL</Title>
        <Title>STABLECOIN</Title>
      </TitlesContainer>
      <UnstyledButton>
        <EnterAppLink href="#">ENTER APP</EnterAppLink>
      </UnstyledButton>
      <UXDIcon>UXD ICON</UXDIcon>
      <StatsContainer>
        <div>
          <span>INSURANCE FUND</span>
          <h3>57M</h3>
        </div>
        <div>
          <span>UXD IN CIRCULATION</span>
          <h3>32M</h3>
        </div>
      </StatsContainer>
    </div>
  );
};

export default Hero;

const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2.75rem;
`;

const Title = styled.h1`
  line-height: 1;
  -webkit-text-stroke-width: ${(p) => (p.deltaNeutral ? "initial" : "1px")};
  -webkit-text-stroke-color: var(--color-white);
  color: ${(p) => (p.deltaNeutral ? "var(--color-white)" : "rgba(0, 0, 0, 0)")};
  font-size: 5.8rem;
  font-family: var(--font-politica);
  font-weight: var(--display-extra-bold);
`;

const EnterAppLink = styled.a`
  display: inherit;
  width: 22.0625rem;
  padding: 1rem 0.875rem;
  background-color: var(--color-primary);
  color: var(--color-black);
  font-weight: var(--text-heavy);
`;

const UXDIcon = styled.div`
  margin: 3.9375rem 0;
`;

const StatsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 3.5rem;
  width: fit-content;

  &:after {
    content: "";
    position: absolute;
    top: calc(100% + 1.87rem);
    left: 0;
    height: 1px;
    width: 165%;
    background: linear-gradient(to right, #1b1b1b, var(--color-black));
  }

  span {
    color: var(--color-secondary);
  }

  h3 {
    font-size: 3.5rem;
    letter-spacing: -0.055em;
    font-weight: var(--text-bold);
  }
`;
