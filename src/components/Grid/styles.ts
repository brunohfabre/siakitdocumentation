import styled, { css } from 'styled-components';

export type ContainerProps = {
  overflow?: boolean | 'auto' | 'hidden';
  columns: number | string;
  gap?: boolean | number;
  padding?: boolean | number;
  width?: number | string;
  height?: number | string;
};

export const Container = styled.div<ContainerProps>`
  ${({ overflow }) =>
    overflow &&
    css`
      overflow: ${typeof overflow === 'boolean' ? 'auto' : overflow};
    `}

  display: grid;

  ${({ columns }) =>
    typeof columns === 'number'
      ? css`
          grid-template-columns: repeat(${columns}, 1fr);
        `
      : css`
          grid-template-columns: ${columns};
        `};

  ${({ gap }) =>
    gap &&
    css`
      gap: ${typeof gap === 'boolean' ? '16px' : `${gap}px`};
    `}

  ${({ padding }) =>
    padding &&
    css`
      padding: ${typeof padding === 'boolean' ? '16px' : `${padding}px`};
    `}

  ${({ width }) =>
    width &&
    css`
      max-width: ${typeof width === 'string' ? width : `${width}px`};
      width: ${typeof width === 'string' ? width : `${width}px`};
    `}

  ${({ height }) =>
    height &&
    css`
      max-height: ${typeof height === 'string' ? height : `${height}px`};
      height: ${typeof height === 'string' ? height : `${height}px`};
    `}
`;
