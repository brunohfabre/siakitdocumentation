import { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import { X } from 'phosphor-react';
import { toMoney } from 'vanilla-masker';

import { useTheme } from '../../hooks/theme';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import { InputContainer, Label, InputBody, Error } from './styles';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  explanation?: string;
}
type MoneyProps = JSX.IntrinsicElements['input'] & Props;

export function Money({
  name,
  label,
  disabled,
  ...rest
}: MoneyProps): JSX.Element {
  const { colorScheme } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(defaultValue);

  function handleChange(value: string): void {
    const masked = toMoney(value);

    if (inputRef.current) {
      inputRef.current.value = masked;
    }

    setIsFilled(masked);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value: string) => {
        handleChange(value);
      },
      clearValue: (ref) => {
        ref.current.value = '';

        setIsFilled('');
      },
    });
  }, [fieldName, registerField]);

  function handleClear(): void {
    setIsFilled('');

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <InputContainer disabled={!!disabled}>
      {label && (
        <Label htmlFor={fieldName} isErrored={!!error}>
          {label}
        </Label>
      )}

      <InputBody
        isFocused={isFocused}
        isFilled={isFilled}
        isErrored={!!error}
        colorScheme={colorScheme}
        disabled={!!disabled}
      >
        <Text size="sm" lowContrast>
          R$
        </Text>
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChange={(event) => handleChange(event.target.value)}
          {...rest}
        />
        {isFilled && !disabled && (
          <IconButton
            type="button"
            icon={X}
            size="sm"
            variant="ghost"
            colorScheme="gray"
            onClick={handleClear}
            tabIndex={-1}
          />
        )}
      </InputBody>

      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}
