import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LogoWrapper>LOGO</LogoWrapper>
      <ul>
        <li>
          <a href="#">DISCORD</a>
        </li>
        <li>
          <a href="#">TWITTER</a>
        </li>
        <li>
          <a href="#">MEDIUM</a>
        </li>
        <li>
          <a href="#">WHITEPAPER</a>
        </li>
        <li>
          <a href="#">GITHUB</a>
        </li>
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 9.9375rem;
  padding-bottom: 3.375rem;
  border-right: 1px solid var(--color-border);

  ul {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    li {
      color: var(--color-secondary);

      &:hover {
        color: var(--color-white);
      }
    }
  }
`;

const LogoWrapper = styled.div`
  padding: 3.375rem 3.5625rem;
  background: var(--gradient-logo);
`;
