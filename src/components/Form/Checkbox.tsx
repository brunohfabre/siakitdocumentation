import { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import { Check } from 'phosphor-react';
import styled from 'styled-components';

import { Colors, useTheme } from '../../hooks/theme';
import { InputContainer, Label, CheckboxBody, Error } from './styles';

type CheckboxContainerProps = {
  checked: boolean;
  colorScheme: Colors;
};

const CheckboxContainer = styled.button<CheckboxContainerProps>`
  all: unset;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    width: 16px;
    height: 16px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, checked, colorScheme }) =>
      checked ? theme.colors[colorScheme][9] : theme.colors.gray[4]};

    svg {
      display: ${({ checked }) => (checked ? 'block' : 'none')};
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
type CheckboxProps = JSX.IntrinsicElements['input'] & Props;

export function Checkbox({
  name,
  label,
  direction = 'column',
  disabled,
  options,
}: CheckboxProps): JSX.Element {
  const { colorScheme } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue = [], registerField, error } = useField(name);

  const [selected, setSelected] = useState<string[]>(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: () => {
        return selected;
      },
      setValue: (ref, value: string[]) => {
        setSelected(value);
      },
      clearValue: () => {
        setSelected([]);
      },
    });
  }, [fieldName, registerField, selected]);

  function handleSelect(option: Option): void {
    if (selected.includes(option.value)) {
      setSelected((prevState) =>
        prevState.filter((item) => item !== option.value),
      );
    } else {
      setSelected((prevState) => [...prevState, option.value]);
    }
  }

  return (
    <InputContainer disabled={!!disabled}>
      {label && (
        <Label htmlFor={fieldName} isErrored={!!error}>
          {label}
        </Label>
      )}

      <CheckboxBody isErrored={!!error} direction={direction}>
        {options.map((option) => (
          <CheckboxContainer
            key={option.value}
            type="button"
            checked={selected.includes(option.value)}
            colorScheme={colorScheme}
            disabled={disabled}
            onClick={() => {
              if (!disabled) {
                handleSelect(option);
              }
            }}
          >
            <div>
              <Check size={12} color="#fff" weight="bold" />
            </div>

            <p>{option.label}</p>
          </CheckboxContainer>
        ))}
      </CheckboxBody>

      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}
