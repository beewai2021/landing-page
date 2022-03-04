import React from "react";
import styled from "styled-components";

import UnstyledButton from "../GlobalStyles/UnstyledButton";

const StartMinting = () => {
  return (
    <StartMintingWrapper>
      <div>
        <Headline>
          ST<em>A</em>RT
        </Headline>
        <Headline>
          <span>{"--->"}</span> M<em>I</em>NTING_
        </Headline>
      </div>
      <a href="https://app.uxd.fi" target="_blank" rel="noopener noreferrer">
        <UnstyledButton>OPEN WEB APP</UnstyledButton>
      </a>
    </StartMintingWrapper>
  );
};

export default StartMinting;

const StartMintingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 5.875rem;
  width: 100%;

  a {
    border: none;
    padding: 4rem 11.3125rem;
    background-color: var(--color-primary);
    box-shadow: 0 0.1875rem 1.9375rem -0.5625rem rgba(102, 255, 76, 0.87);
    font-size: 1.125rem;
    font-weight: var(--text-heavy);
    color: var(--color-black);
  }
`;

const Headline = styled.h1`
  max-width: 58.25rem;
  line-height: 1.25;
  font-family: var(--font-politica);
  font-weight: var(--display-bold);
  font-size: 4.9375rem;

  em {
    font: inherit;
    font-style: italic;
  }
`;
