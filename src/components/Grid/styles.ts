import styled, { css } from 'styled-components';

export type ContainerProps = {
  columns: number | string;
  gap?: boolean | number;
  padding?: boolean | number;
};

export const Container = styled.div<ContainerProps>`
  overflow: auto;

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
`;
