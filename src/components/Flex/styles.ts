import styled, { css } from 'styled-components';

export type ContainerProps = {
  flex?: number;
  direction?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

  gap?: boolean | number;
  padding?: boolean | number;

  width?: number | string;
  height?: number | string;
};

export const Container = styled.div<ContainerProps>`
  /* overflow: auto; */

  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      flex: 1;
      justify-content: ${justifyContent};
    `}

  ${({ alignItems }) =>
    alignItems
      ? css`
          flex: 1;
          align-items: ${alignItems};
        `
      : css`
          align-items: flex-start;
        `}

  ${({ flex }) =>
    typeof flex === 'number' &&
    css`
      flex: ${flex};
    `}

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
      width: ${typeof width === 'string' ? width : `${width}px`};
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${typeof height === 'string' ? height : `${height}px`};
    `}
`;
