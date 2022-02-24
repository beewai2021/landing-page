import React from "react";
import styled from "styled-components";

import SectionWrapper from "../SectionWrapper/SectionWrapper.component";

const Swap = () => {
  return (
    <SectionWrapper title="SWAP">
      <SwapWrapper>
        <Showcase>
          <h3>Mint</h3>
          <SwapRow>
            <div>SOL</div>
            <div>SWAP ICON</div>
            <div>UXD</div>
          </SwapRow>
          <h3>Redeem</h3>
        </Showcase>
        <p>
          In order to Mint 1 UXD, a user deposits 1 USD of crypto assets into a
          smart contract that creates a delta-neutral position on a derivatives
          exchange. This position will always be worth 1 USD, so a user can
          redeem their crypto assets simply by returning their UXD to the smart
          contract.
          <a href="#">Learn More</a>
        </p>
        <span>MORE COLLATERAL COMING SOON</span>
      </SwapWrapper>
    </SectionWrapper>
  );
};

export default Swap;

const SwapWrapper = styled.div`
  margin: 0 auto;

  p {
    max-width: 40.3125rem;
    margin-bottom: 1.25rem;
    font-size: 1.125rem;
    color: var(--color-secondary);

    a {
      margin-left: 5px;
      font-weight: var(--text-medium);
      color: var(--color-primary);
    }
  }
`;

const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.0625rem;
  margin-bottom: 6.375rem;

  h3 {
    font-size: 1.6875rem;
    font-weight: var(--text-normal);
    color: var(--color-secondary);
  }
`;

const SwapRow = styled.div`
  display: flex;
  gap: 10.4375rem;
  font-size: 2.1rem;
  font-weight: var(--text-medium);
`;
