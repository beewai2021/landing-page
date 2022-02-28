import React from "react";
import styled from "styled-components";

import SectionWrapper from "../SectionWrapper/SectionWrapper.component";

const Investors = () => {
  return (
    <SectionWrapper title="INVESTORS">
      <InvestorsWrapper>
        <Headline>
          OUR E<em>A</em>RLY IN<em>V</em>ESTORS AND PAR<em>T</em>NERS_
        </Headline>
      </InvestorsWrapper>
    </SectionWrapper>
  );
};

export default Investors;

const InvestorsWrapper = styled.div``;

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
