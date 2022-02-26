import React from "react";
import styled from "styled-components";

const SectionWrapper = ({ title, children }) => {
  return (
    <SectionContainer>
      {title && <aside>{title}</aside>}
      {children}
    </SectionContainer>
  );
};

export default SectionWrapper;

const SectionContainer = styled.div`
  display: flex;
  margin: 12.5625rem auto;

  aside {
    margin-top: 1.65rem;
    margin-right: 5.625rem;
    letter-spacing: 0.22rem;
    font-size: 0.8125rem;
    color: var(--color-secondary);
  }
`;
