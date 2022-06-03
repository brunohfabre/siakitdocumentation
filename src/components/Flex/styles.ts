import styled, { css } from 'styled-components';

export type ContainerProps = {
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
  flex: 1;
  overflow: auto;

  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}

  ${({ alignItems }) =>
    alignItems
      ? css`
          align-items: ${alignItems};
        `
      : css`
          align-items: flex-start;
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
