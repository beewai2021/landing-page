import React from "react";

import styled from "styled-components";

import SectionWrapper from "../SectionWrapper/SectionWrapper.component";
import DeltaNeutralGraphic from "../../images/delta-neutral-graphic.svg";

const DeltaNeutral = () => {
  return (
    <SectionWrapper>
      <DeltaNeutralWrapper>
        <img src={DeltaNeutralGraphic} alt="Delta neutral graphic" />
      </DeltaNeutralWrapper>
    </SectionWrapper>
  );
};

export default DeltaNeutral;

const DeltaNeutralWrapper = styled.div`
  margin: 0 auto;

  img {
    width: 100%;
  }
`;
