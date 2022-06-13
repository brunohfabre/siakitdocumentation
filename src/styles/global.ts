import { createGlobalStyle } from 'styled-components';

import BarlowBlack from '../assets/fonts/barlow/Barlow-Black.ttf';
import BarlowBold from '../assets/fonts/barlow/Barlow-Bold.ttf';
import BarlowExtraBold from '../assets/fonts/barlow/Barlow-ExtraBold.ttf';
import BarlowExtraLight from '../assets/fonts/barlow/Barlow-ExtraLight.ttf';
import BarlowLight from '../assets/fonts/barlow/Barlow-Light.ttf';
import BarlowMedium from '../assets/fonts/barlow/Barlow-Medium.ttf';
import BarlowRegular from '../assets/fonts/barlow/Barlow-Regular.ttf';
import BarlowSemiBold from '../assets/fonts/barlow/Barlow-SemiBold.ttf';
import BarlowThin from '../assets/fonts/barlow/Barlow-Thin.ttf';

export const GlobaStyle = createGlobalStyle`
  :root {
    --rdp-cell-size: 40px;
  }

  ::-webkit-scrollbar {
    margin-bottom: 10px;
    width: 14px;
    height: 14px;
    border-radius: 24px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 24px;
    box-shadow: inset 0 0 10px 10px rgba(0, 0, 0, 0.16);
    border: solid 4px transparent;
  }

  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowThin}) format("truetype");
    font-weight: 100;
  }
  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowExtraLight}) format("truetype");
    font-weight: 200;
  }
  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowLight}) format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowRegular}) format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowMedium}) format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowSemiBold}) format("truetype");
    font-weight: 600;
  }
  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowBold}) format("truetype");
    font-weight: 700;
  }
  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowExtraBold}) format("truetype");
    font-weight: 800;
  }
  @font-face {
    font-family: 'Barlow';
    src: local('Barlow'), url(${BarlowBlack}) format("truetype");
    font-weight: 900;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* html, body, #root {
    height: 100%;
    overflow: auto;
  }

  #root {
    display: flex;
  } */

  body {
    background-color: ${(props) => props.theme.colors.gray[1]};
    color: ${(props) => props.theme.colors.gray[12]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
  }

  h6, h5, h4, h3, h2, h1, strong {
    font-weight: 600;
  }
`;
