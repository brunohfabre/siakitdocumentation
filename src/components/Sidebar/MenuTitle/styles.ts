import styled, { css } from 'styled-components';

import { Colors } from '../../../hooks/theme';

type ContainerProps = {
  colorScheme: Colors;
  isExpanded: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 32px;

  display: flex;
  align-items: flex-end;

  padding-bottom: 6px;

  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;

  color: ${({ colorScheme, theme }) => theme.colors[colorScheme][6]};

  ${({ isExpanded }) =>
    isExpanded
      ? css`
          padding-left: 16px;
        `
      : css`
          justify-content: center;
        `}
`;
