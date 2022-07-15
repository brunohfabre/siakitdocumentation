import styled from 'styled-components';

export const ThemeButton = styled.button`
  all: unset;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 8px;

  cursor: pointer;

  div {
    position: relative;

    svg {
      position: absolute;
      bottom: 8px;
      right: 8px;
    }
  }
`;
