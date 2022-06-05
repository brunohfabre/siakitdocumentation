import styled, { css } from 'styled-components';

export type ContainerProps = {
  flex?: boolean | number;
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';

  gap?: boolean | number;
  padding?: boolean | number;

  width?: number | string;
  height?: number | string;
};

export const Container = styled.div<ContainerProps>`
  /* overflow: auto; */

  display: flex;

  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}

  ${({ align }) =>
    align &&
    css`
      align-items: ${align};
    `}

    ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}

  ${({ flex }) =>
    flex &&
    css`
      flex: ${typeof flex === 'boolean' ? 1 : flex};
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
