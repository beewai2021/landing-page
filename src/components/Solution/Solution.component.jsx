import React from "react";
import styled from "styled-components";

import SectionWrapper from "../SectionWrapper/SectionWrapper.component";

const Solution = () => {
  return (
    <SectionWrapper title="SOLUTION">
      <SolutionWrapper>
        <Headline>
          THE O<em>N</em>E TO S<em>O</em>LVE THE STABLEC<em>O</em>IN TR
          <em>I</em>LLEMA_
        </Headline>
      </SolutionWrapper>
    </SectionWrapper>
  );
};

export default Solution;

const SolutionWrapper = styled.div``;

const Headline = styled.h1`
  margin-bottom: 6.5rem;
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
