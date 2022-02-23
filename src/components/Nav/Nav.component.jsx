import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <ListItem>
          <a href="#">OVERVIEW</a>
        </ListItem>
        <ListItem>
          <a href="#">SWAP</a>
        </ListItem>
        <ListItem>
          <a href="#">SOLUTION</a>
        </ListItem>
        <ListItem>
          <a href="#">INVESTORS</a>
        </ListItem>
      </ul>
      <ul>
        <ListItem webApp>
          <a href="#">WEB APP</a>
        </ListItem>
        <ListItem>
          <a href="#">BUY GOV TOKEN</a>
        </ListItem>
      </ul>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 4.3125rem 3.25rem;
  background: var(--gradient-nav);
  font-weight: var(--text-medium);

  ul {
    display: flex;
    gap: 2.5rem;
  }
`;

const ListItem = styled.li`
  font-weight: ${(p) => p.webApp && "var(--text-heavy)"};
  color: ${(p) =>
    p.webApp ? "var(--color-primary)" : "var(--color-secondary)"};

  &:hover {
    color: var(--color-white);
  }
`;
