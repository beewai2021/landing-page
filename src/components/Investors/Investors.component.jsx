import React from "react";
import styled from "styled-components";

import SectionWrapper from "../SectionWrapper/SectionWrapper.component";
import AlamedaIcon from "../../images/investors-icons/alameda-research.svg";
import MulticoinIcon from "../../images/investors-icons/multicoin-capital.svg";
import DefianceIcon from "../../images/investors-icons/defiance-capital.svg";
import CMSIcon from "../../images/investors-icons/cms.svg";
import SolanaIcon from "../../images/investors-icons/solana.svg";
import MecurialIcon from "../../images/investors-icons/mecurial-finance.svg";
import AnatolyIcon from "../../images/investors-icons/anatoly.svg";
import RajIcon from "../../images/investors-icons/raj.svg";
import DylanIcon from "../../images/investors-icons/dylan.svg";

const Investors = () => {
  return (
    <SectionWrapper title="INVESTORS">
      <InvestorsWrapper>
        <Headline>
          OUR E<em>A</em>RLY IN<em>V</em>ESTORS AND PAR<em>T</em>NERS_
        </Headline>
        <IconRowsWrapper>
          <IconRow>
            <img src={AlamedaIcon} alt="Alameda Logo" />
            <img src={MulticoinIcon} alt="Multicoin Logo" />
            <img src={DefianceIcon} alt="Defiance Logo" />
          </IconRow>
          <IconRow>
            <img src={CMSIcon} alt="CMS Logo" />
            <img src={SolanaIcon} alt="Solana Logo" />
            <img src={MecurialIcon} alt="Mecuiral Logo" />
          </IconRow>
          <IconRow>
            <img src={AnatolyIcon} alt="Anatoly Logo" />
            <img src={RajIcon} alt="Raj Logo" />
            <img src={DylanIcon} alt="Dylan Logo" />
          </IconRow>
        </IconRowsWrapper>
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

const IconRowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconRow = styled.div`
  display: flex;
  gap: 7.4375rem;
  padding: 2.5625rem 0;
  border-bottom: 1px solid var(--color-border);

  img {
    max-width: 15.6875rem;
  }
`;
