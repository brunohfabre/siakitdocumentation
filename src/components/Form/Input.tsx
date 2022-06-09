import React, { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';

import { useTheme } from '../../hooks/theme';
import { Container, Label, InputBody, Error } from './styles';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
}
type InputProps = JSX.IntrinsicElements['input'] & Props;

export function Input({
  name,
  label,
  disabled,
  ...rest
}: InputProps): JSX.Element {
  const { colorScheme } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;

        setIsFilled(value);
      },
      clearValue: (ref) => {
        ref.current.value = '';

        setIsFilled('');
      },
    });
  }, [fieldName, registerField]);

  function handleChange(value: string): void {
    setIsFilled(value);
  }

  return (
    <Container disabled={!!disabled}>
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
      </InputBody>

      {error && <Error>{error}</Error>}
    </Container>
  );
}
