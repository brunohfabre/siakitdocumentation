import React, { useEffect, useState } from 'react';

import { useField } from '@unform/core';
import styled from 'styled-components';

import { Colors, useTheme } from '../../hooks/theme';
import { InputContainer, Label, CheckboxBody, Error } from './styles';

type RadioContainerProps = {
  checked: boolean;
  colorScheme: Colors;
};

const RadioContainer = styled.button<RadioContainerProps>`
  all: unset;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    width: 16px;
    height: 16px;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, checked, colorScheme }) =>
      checked ? theme.colors[colorScheme][9] : theme.colors.gray[4]};

    span {
      display: ${({ checked }) => (checked ? 'block' : 'none')};
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  p {
    font-size: 14px;

    color: ${({ theme }) => theme.colors.gray[12]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

type Option = {
  value: string;
  label: string;
};

interface Props {
  name: string;
  label?: string;
  direction?: 'row' | 'column';
  options: Option[];
}
type RadioProps = JSX.IntrinsicElements['input'] & Props;

export function Radio({
  name,
  label,
  direction = 'column',
  disabled,
  options,
}: RadioProps): JSX.Element {
  const { colorScheme } = useTheme();

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  const [selected, setSelected] = useState<string>(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => {
        return selected;
      },
      setValue: (ref, value: string) => {
        setSelected(value);
      },
      clearValue: () => {
        setSelected('');
      },
    });
  }, [fieldName, registerField, selected]);

  return (
    <InputContainer disabled={!!disabled}>
      {label && (
        <Label htmlFor={fieldName} isErrored={!!error}>
          {label}
        </Label>
      )}

      <CheckboxBody isErrored={!!error} direction={direction}>
        {options.map((option) => (
          <RadioContainer
            key={option.value}
            type="button"
            checked={selected === option.value}
            colorScheme={colorScheme}
            disabled={disabled}
            onClick={() => {
              if (!disabled) {
                setSelected(option.value);
              }
            }}
          >
            <div>
              <span />
            </div>

            <p>{option.label}</p>
          </RadioContainer>
        ))}
      </CheckboxBody>

      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}
