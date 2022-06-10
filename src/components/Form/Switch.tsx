import { useEffect, useState } from 'react';

import { useField } from '@unform/core';
import styled, { css } from 'styled-components';

import { Colors, useTheme } from '../../hooks/theme';
import { InputContainer, SwitchBody, Error } from './styles';

type SwitchContainerProps = {
  checked: boolean;
  colorScheme: Colors;
};

const SwitchContainer = styled.button<SwitchContainerProps>`
  all: unset;

  cursor: pointer;

  width: 44px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.gray[4]};
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  transition: all 0.2s;

  > div {
    width: 16px;
    height: 16px;
    border-radius: 8px;

    margin: 0 4px;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  ${({ theme, checked, colorScheme }) =>
    checked &&
    css`
      background-color: ${theme.colors[colorScheme][9]};

      justify-content: flex-end;
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;

const SwitchLabel = styled.p`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.gray[12]};
`;

interface Props {
  name: string;
  label?: string;
}
type SwitchProps = JSX.IntrinsicElements['input'] & Props;

export function Switch({ name, label, disabled }: SwitchProps): JSX.Element {
  const { colorScheme } = useTheme();

  const {
    fieldName,
    defaultValue = false,
    registerField,
    error,
  } = useField(name);

  const [checked, setChecked] = useState<boolean>(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return checked;
      },
      setValue: (ref, value: boolean) => {
        setChecked(value);
      },
      clearValue: () => {
        setChecked(false);
      },
    });
  }, [fieldName, registerField, checked]);

  return (
    <InputContainer disabled={!!disabled}>
      <SwitchBody>
        <SwitchContainer
          type="button"
          checked={checked}
          colorScheme={colorScheme}
          disabled={disabled}
          onClick={() => setChecked((prevState) => !prevState)}
        >
          <div />
        </SwitchContainer>

        <SwitchLabel>{label}</SwitchLabel>
      </SwitchBody>

      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}
