import styled, { css } from 'styled-components';

import { Colors } from '../../hooks/theme';

const sizes = {
  xs: css`
    height: 24px;
    width: 24px;

    &::after {
      height: 8px;
      width: 8px;
      border: 1px solid ${({ theme }) => theme.colors.white};
    }
  `,
  sm: css`
    height: 32px;
    width: 32px;

    &::after {
      height: 12px;
      width: 12px;
      border: 1.5px solid ${({ theme }) => theme.colors.white};
    }
  `,
  md: css`
    height: 48px;
    width: 48px;

    &::after {
      height: 16px;
      width: 16px;
      border: 2px solid ${({ theme }) => theme.colors.white};
    }
  `,
  lg: css`
    height: 64px;
    width: 64px;

    &::after {
      height: 22px;
      width: 22px;
      border: 2.5px solid ${({ theme }) => theme.colors.white};
    }
  `,
  xl: css`
    height: 96px;
    width: 96px;

    &::after {
      height: 32px;
      width: 32px;
      border: 3px solid ${({ theme }) => theme.colors.white};
    }
  `,
  '2xl': css`
    height: 128px;
    width: 128px;

    &::after {
      height: 42px;
      width: 42px;
      border: 3.5px solid ${({ theme }) => theme.colors.white};
    }
  `,
};

export type Size = keyof typeof sizes;

type ContainerProps = {
  size: Size;
  src?: string;
  colorScheme: Colors;
  badge: boolean;
};

export const Container = styled.span<ContainerProps>`
  position: relative;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ colorScheme, theme }) => css`
    background-color: ${theme.colors[colorScheme][3]};

    strong,
    h4,
    h5,
    h6 {
      color: ${theme.colors[colorScheme][11]};
    }
  `}

  ${({ src }) =>
    src &&
    css`
      background: url('${src}') no-repeat center;
      background-size: cover;
    `}

    ${({ badge, theme }) =>
    badge &&
    css`
      &::after {
        position: absolute;
        content: '';
        height: 16px;
        width: 16px;
        background-color: ${theme.colors.orange[9]};
        border-radius: 50%;
        bottom: 0;
        right: 0;
      }
    `}

    ${({ size }) => sizes[size]}
`;
