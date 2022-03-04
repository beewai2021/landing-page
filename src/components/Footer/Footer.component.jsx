import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <Links>
        <a href="" target="_blank" rel="noopener noreferrer">
          HOODIE NFT
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          TERMS & CONDITIONS
        </a>
      </Links>
      <div>UXD PROTOCOL {new Date().getFullYear()}</div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid var(--color-border);
  padding: 1.875rem 0 4.1875rem 0;
  font-weight: var(--text-medium);
  color: var(--color-tertiary);
`;

const Links = styled.div`
  display: flex;
  gap: 2.5rem;
`;
