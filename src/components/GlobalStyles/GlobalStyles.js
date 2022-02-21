import { createGlobalStyle } from "styled-components";

import { COLORS } from "../../constants";

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.5;
    font-family: 'Raleway', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  // set minimum content height to be 100%
  html, body, #root {
    height: 100%;
  }

  html {
    --color-black: hsl(${COLORS.black});
    --color-white: hsl(${COLORS.white});
    --color-primary: hsl(${COLORS.primary});
    --color-secondary: hsl(${COLORS.secondary});
    --color-border: hsl(${COLORS.white} / 0.1);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;

export default GlobalStyles;
