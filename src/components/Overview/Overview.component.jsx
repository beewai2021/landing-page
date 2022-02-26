import React from "react";
import styled from "styled-components";

import SectionWrapper from "../SectionWrapper/SectionWrapper.component";

const Overview = () => {
  return (
    <SectionWrapper title="OVERVIEW">
      <OverviewWrapper>
        <Headline>
          A STABLECOIN DEF<em>I</em> HAS NE<em>V</em>ER SEEN BEF<em>O</em>RE_
        </Headline>
        <OverviewGrid>
          <OverviewItem>
            <h3>1 UXD = 1 USD</h3>
            <p>Anyone can always mint 1 UXD for 1 USD.</p>
          </OverviewItem>
          <OverviewItem>
            <h3>INSTANT</h3>
            <p>Mint/Redemption process is instant.</p>
          </OverviewItem>
          <OverviewItem>
            <h3>
              EARN<em>+</em>
            </h3>
            <p>
              Yield from the delta-neutral position will be distributed to the
              stakeholders of UXD protocol.
            </p>
          </OverviewItem>
          <OverviewItem>
            <h3>CENSORSHIP RESISTANT</h3>
            <p>Transact with anyone, anywhere and anytime.</p>
          </OverviewItem>
        </OverviewGrid>
      </OverviewWrapper>
    </SectionWrapper>
  );
};

export default Overview;

const OverviewWrapper = styled.div`
  margin: 0 auto;
`;

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

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 9.875rem;
  row-gap: 5.5625rem;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  font-size: 1.125rem;

  h3 {
    margin-bottom: 1.5rem;
    font-weight: var(--text-medium);

    em {
      font-style: normal;
      color: var(--color-primary);
    }
  }

  p {
    color: var(--color-secondary);
  }
`;
