import { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';
import { X, Eye, EyeSlash } from 'phosphor-react';

import { useTheme } from '../../hooks/theme';
import { IconButton } from '../IconButton';
import { InputContainer, Label, InputBody, Error } from './styles';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  explanation?: string;
}
type PasswordProps = JSX.IntrinsicElements['input'] & Props;

export function Password({
  name,
  label,
  disabled,
  ...rest
}: PasswordProps): JSX.Element {
  const { colorScheme } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [isHidden, setIsHidden] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(defaultValue);

  function handleChange(value: string): void {
    if (inputRef.current) {
      inputRef.current.value = value;
    }

    setIsFilled(value);
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
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          type={isHidden ? 'password' : 'text'}
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
            icon="X"
            size="sm"
            variant="ghost"
            colorScheme="gray"
            onClick={handleClear}
            tabIndex={-1}
          />
        )}
        <IconButton
          type="button"
          icon={isHidden ? 'Eye' : 'EyeSlash'}
          size="sm"
          variant="ghost"
          colorScheme="gray"
          onClick={() => setIsHidden((prevState) => !prevState)}
          tabIndex={-1}
          weight="fill"
        />
      </InputBody>

      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}
