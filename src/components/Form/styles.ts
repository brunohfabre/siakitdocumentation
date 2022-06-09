import styled, { css } from 'styled-components';

import { Colors } from '../../hooks/theme';

type ContainerProps = {
  disabled: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  gap: 4px;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

type LabelProps = {
  isErrored: boolean;
};

export const Label = styled.label<LabelProps>`
  color: ${({ theme }) => theme.colors.gray[12]};
  font-size: 14px;
  font-weight: 400;

  ${({ isErrored, theme }) =>
    isErrored &&
    css`
      color: ${theme.colors.red[11]};
    `}
`;

type InputBodyProps = {
  isFocused: boolean;
  isFilled: string;
  isErrored: boolean;
  colorScheme: Colors;
  disabled: boolean;
};

export const InputBody = styled.div<InputBodyProps>`
  display: flex;

  background-color: ${({ theme }) => theme.colors.gray[1]};
  border: 2px solid ${({ theme }) => theme.colors.gray[4]};
  height: 32px;
  border-radius: 8px;
  padding: 0 12px;

  transition: all 0.15s;

  input {
    all: unset;

    flex: 1;

    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray[12]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[9]};
    }
  }

  ${({ isFocused, theme, colorScheme }) =>
    isFocused &&
    css`
      background-color: ${theme.colors.gray[1]};
      border-color: ${theme.colors[colorScheme][9]};
    `}

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      background-color: ${theme.colors.gray[1]};
    `}

  ${({ isErrored, theme }) =>
    isErrored &&
    css`
      background-color: ${theme.colors.red[3]};
      border-color: ${theme.colors.red[9]};
    `}

  ${({ theme, disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.gray[4]};
    `}
`;

export const Error = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red[11]};
`;
