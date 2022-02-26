import React from "react";
import styled from "styled-components";

import UXDLogo from "../../images/UXD.svg";
import DiscordIcon from "../../images/social-media-icons/Discord.svg";
import TwittterIcon from "../../images/social-media-icons/Twitter.svg";
import MediumIcon from "../../images/social-media-icons/Medium.svg";
import WhitepaperIcon from "../../images/social-media-icons/Whitepaper.svg";
import GitHubIcon from "../../images/social-media-icons/GitHub.svg";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <LogoWrapper>
        <img src={UXDLogo} alt="UXD Logo" />
      </LogoWrapper>
      <ul>
        <li>
          <a href="#">
            <img src={DiscordIcon} alt="Discord icon" />
            <span>DISCORD</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={TwittterIcon} alt="Discord icon" />
            <span>TWITTER</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={MediumIcon} alt="Discord icon" />
            <span>MEDIUM</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={WhitepaperIcon} alt="Discord icon" />
            <span>WHITEPAPER</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={GitHubIcon} alt="Discord icon" />
            <span>GITHUB</span>
          </a>
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
  padding-bottom: 3.375rem;
  border-right: 1px solid var(--color-border);

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    li {
      position: relative;

      a {
        img {
          display: block;
        }

        span {
          position: absolute;
          top: 0;
          left: calc(100% + 18px);
          pointer-events: none;
          visibility: hidden;
        }
      }
    }
  }
`;

const LogoWrapper = styled.div`
  padding: 3.375rem 3.5625rem;
  background: var(--gradient-logo);

  img {
    height: 2.8125rem;
    width: 2.8125rem;
  }
`;
