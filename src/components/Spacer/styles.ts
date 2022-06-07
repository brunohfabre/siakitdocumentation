import styled, { css } from 'styled-components';

type ContainerHeight = {
  height: boolean | number | string | undefined;
  width?: boolean | number | string | undefined;
};

type ContainerWidth = {
  height?: boolean | number | string | undefined;
  width: boolean | number | string | undefined;
};

type ContainerProps = ContainerHeight | ContainerWidth;

export const Container = styled.div<ContainerProps>`
  ${({ height }) =>
    height &&
    typeof height === 'boolean' &&
    css`
      height: 16px;
    `};

  ${({ height }) =>
    height &&
    typeof height === 'number' &&
    css`
      height: ${height}px;
    `};

  ${({ height }) =>
    height &&
    typeof height === 'string' &&
    css`
      height: ${height};
    `};

  ${({ width }) =>
    width &&
    typeof width === 'boolean' &&
    css`
      width: 16px;
    `};

  ${({ width }) =>
    width &&
    typeof width === 'number' &&
    css`
      width: ${width}px;
    `};

  ${({ width }) =>
    width &&
    typeof width === 'string' &&
    css`
      width: ${width};
    `};
`;
