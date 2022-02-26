import React from "react";
import styled from "styled-components";

import SectionWrapper from "../SectionWrapper/SectionWrapper.component";

const InsuranceFund = () => {
  return (
    <SectionWrapper>
      <InsuranceFundWrapper>
        <Number>
          <h1>
            57<span>M</span>
          </h1>
          <h3>USD</h3>
        </Number>
        <p>
          Our insurance fund is well-capitalized from early backers of UXD
          Protocol, and will be used to ensure that UXD Protocol has sufficient
          reserves to weather a negative interest rate regime.
        </p>
        <a href="#">Learn More</a>
      </InsuranceFundWrapper>
    </SectionWrapper>
  );
};

export default InsuranceFund;

const InsuranceFundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  p {
    max-width: 50.6875rem;
    line-height: 1.45;
    font-size: 1.6875rem;
    color: var(--color-secondary);
  }

  a {
    margin-top: 2.5625rem;
    font-size: 1.6875rem;
    font-weight: var(--text-medium);
    color: var(--color-primary);
  }
`;

const Number = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 13.125rem;

  h1 {
    letter-spacing: -0.75rem;
    font-family: var(--font-politica);
    font-size: 12.4375rem;
    font-weight: var(--display-extra-bold);

    span {
      font: inherit;
      font-size: 11.875rem;
    }
  }

  h3 {
    margin-left: -0.125rem;
    font-size: 1.375rem;
    font-weight: var(--text-regular);
    color: var(--color-secondary);
  }
`;
