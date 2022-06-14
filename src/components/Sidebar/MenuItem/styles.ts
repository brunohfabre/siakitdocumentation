import styled, { css } from 'styled-components';

import { Colors } from '../../../hooks/theme';

type ContainerProps = {
  isSelected: boolean;
  colorScheme: Colors;
  isExpanded?: boolean;
};

export const Container = styled.a<ContainerProps>`
  position: relative;

  height: 32px;
  padding-left: 16px;

  cursor: pointer;

  display: flex;
  align-items: center;

  gap: 12px;

  font-size: 14px;
  font-weight: 400;

  color: ${({ theme, colorScheme }) => theme.colors[colorScheme][6]};

  &:hover {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
  }

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      color: ${theme.colors.white};

      svg {
        color: ${theme.colors.white};
      }

      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0)
      );

      &:before {
        position: absolute;
        content: '';
        top: 0;
        bottom: 0;
        left: 0;
        width: 2px;
        border-radius: 0 2px 2px 0;
        background-color: white;
      }
    `}

  ${({ isExpanded }) =>
    !isExpanded &&
    css`
      padding: 0;
      justify-content: center;
    `}
`;
