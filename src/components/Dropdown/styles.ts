import styled, { css } from 'styled-components';

import { Card } from '../Card';

export const Content = styled(Card)`
  padding: 8px 0;

  display: flex;
  flex-direction: column;
  min-width: 192px;
`;

const types = {
  default: css``,
  info: css`
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue[3]};
    }

    p {
      color: ${({ theme }) => theme.colors.blue[11]};
    }
  `,
  success: css`
    &:hover {
      background-color: ${({ theme }) => theme.colors.green[3]};
    }

    p {
      color: ${({ theme }) => theme.colors.green[11]};
    }
  `,
  warning: css`
    &:hover {
      background-color: ${({ theme }) => theme.colors.amber[3]};
    }

    p {
      color: ${({ theme }) => theme.colors.amber[11]};
    }
  `,
  danger: css`
    &:hover {
      background-color: ${({ theme }) => theme.colors.red[3]};
    }

    p {
      color: ${({ theme }) => theme.colors.red[11]};
    }
  `,
};

export type Type = 'info' | 'success' | 'warning' | 'danger' | undefined;

type ItemProps = {
  type: Type;
};

export const Item = styled.div<ItemProps>`
  position: relative;
  height: 28px;
  padding-left: 12px;

  display: flex;
  align-items: center;

  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[3]};
  }

  ${({ type }) => types[type || 'default']}
`;
