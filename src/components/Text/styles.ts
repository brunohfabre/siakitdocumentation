import styled, { css } from 'styled-components';

export type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

type ContainerProps = {
  size: Size;
};

export const Container = styled.p<ContainerProps>`
  color: ${(props) => props.theme.colors.gray[12]};
  line-height: 1.5;

  ${({ size }) =>
    size === '6xl' &&
    css`
      font-size: 3.75rem;
    `}

  ${({ size }) =>
    size === '5xl' &&
    css`
      font-size: 3rem;
    `}

    ${({ size }) =>
    size === '4xl' &&
    css`
      font-size: 2.25rem;
    `}

    ${({ size }) =>
    size === '3xl' &&
    css`
      font-size: 1.875rem;
    `}

    ${({ size }) =>
    size === '2xl' &&
    css`
      font-size: 1.5rem;
    `}

  ${({ size }) =>
    size === 'xl' &&
    css`
      font-size: 1.25rem;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      font-size: 1.125rem;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      font-size: 1rem;
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      font-size: 0.875rem;
    `}

  ${({ size }) =>
    size === 'xs' &&
    css`
      font-size: 0.75rem;
    `}
`;
