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

  body {
    background-color: ${(props) => props.theme.colors.gray[1]};
    color: ${(props) => props.theme.colors.gray[12]};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
  }
`;
