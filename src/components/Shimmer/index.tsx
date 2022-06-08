import styled, { keyframes } from 'styled-components';

const placeholderShimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }

  100% {
    background-position: 1000px 0;
  }
`;

const BaseShimmer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray[4]};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.gray[4]} 0%,
    ${({ theme }) => theme.colors.gray[6]} 20%,
    ${({ theme }) => theme.colors.gray[4]} 40%,
    ${({ theme }) => theme.colors.gray[4]} 100%
  );
  background-repeat: no-repeat;
  background-size: 2000px 1000px;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;
`;

export const Rectangle = styled(BaseShimmer)`
  border-radius: 8px;
`;

export const Ellipse = styled(BaseShimmer)`
  border-radius: 50%;
`;
