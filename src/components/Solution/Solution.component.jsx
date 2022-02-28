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
        <Solutions>
          <div>
            <img src="" alt="Decentralised icon" />
            <h3>DECENTRALISED</h3>
            <p>
              UXD Protocol does not interact with any centralized entities or
              custody user assets. Transactions using UXD will be trustless +
              censhorship-free.
            </p>
          </div>
          <div>
            <img src="" alt="Stable icon" />
            <h3>STABLE</h3>
            <p>
              UXD is price stable by construction. Since UXD is 100% backed by
              crypto assets, users will be able to redeem 1 UXD for 1 USD worth
              of assets at any time.
            </p>
          </div>
          <div>
            <img src="" alt="Capital efficient icon" />
            <h3>CAPITAL EFFICIENT</h3>
            <p>
              Users can mint 1 UXD for 1 USD worth of assets. No
              over-collateralization or "stability fees" are required. 1=1.
            </p>
          </div>
        </Solutions>
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

const Solutions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4.9375rem;
  font-size: 1.125rem;

  h3 {
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 16.25rem;
    color: var(--color-secondary);
  }
`;
