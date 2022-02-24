import { createGlobalStyle } from "styled-components";

import { COLORS, WEIGHTS, GRADIENTS } from "../../constants";

const GlobalStyles = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1;
    font-family: "eurostile", -apple-system, BlinkMacSystemFont, sans-serif;
    letter-spacing: 0.062rem;
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
    --gradient-logo: ${GRADIENTS.logoWrapper};
    --gradient-nav: ${GRADIENTS.navWrapper};
    --text-regular: ${WEIGHTS.textRegular};
    --text-medium: ${WEIGHTS.textMedium};
    --text-bold: ${WEIGHTS.textBold};
    --text-heavy: ${WEIGHTS.textHeavy};
    --display-bold: ${WEIGHTS.displayBold};
    --display-extra-bold: ${WEIGHTS.displayExtraBold};
  }

  body {
    background-color: var(--color-black);    
    background-image: url('/background-gradient.svg');
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 
    color: var(--color-white);
  }

  p {
    line-height: 1.5;
  }

  a {
    text-decoration-line: none;
    color: inherit;
  }
`;

export default GlobalStyles;
