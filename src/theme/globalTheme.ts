// Some global styles, classes, etc

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    line-height: 1.15;
    font-size: 16px;
  }

  .no-scroll {
    overflow: hidden !important;
    touch-action: none;
    -ms-touch-action: none;
  }
`

