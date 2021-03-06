import { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';

import { useTheme } from '../../../hooks/theme';
import { InputContainer, Label, Error } from '../styles';
import { Container } from './styles';

type Option = {
  value: number | string;
  label: string;
};

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  returnType?: 'key' | 'option';
  onChange?: (value: string | number | null) => void;
  menuPlacement?: 'top' | 'bottom';
}
type SelectProps = JSX.IntrinsicElements['input'] & Props;

export function Select({
  name,
  label,
  disabled,
  options,
  placeholder,
  returnType = 'key',
  onChange,
  menuPlacement,
}: SelectProps): JSX.Element {
  const { colorScheme } = useTheme();

  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const [selected, setSelected] = useState<Option | null>(
    options.find((option) => option.value === defaultValue) || null,
  );

  useEffect(() => {
    registerField<Option | string | number>({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (returnType === 'option') {
          return ref.props.value || '';
        }

        return ref.props.value?.value || '';
      },
      setValue: (ref, value: Option | string | number) => {
        if (ref.props?.options) {
          if (typeof value === 'object') {
            setSelected(value);

            if (onChange) {
              onChange(value.value);
            }

            return;
          }

          const findOption = ref.props?.options.find(
            (option: Option) => option.value === value,
          );

          if (onChange && findOption) {
            onChange(findOption.value);
          }

          if (findOption) {
            setSelected(findOption);
          }
        }
      },
      clearValue: () => {
        setSelected(null);
      },
    });
  }, [fieldName, registerField, selected, returnType, options]);

  return (
    <InputContainer disabled={!!disabled}>
      {label && (
        <Label htmlFor={fieldName} isErrored={!!error}>
          {label}
        </Label>
      )}

      <Container
        ref={selectRef}
        options={options}
        classNamePrefix="react-select"
        placeholder={placeholder}
        colorScheme={colorScheme}
        isErrored={!!error}
        value={selected}
        onChange={(option) => {
          setSelected(option as Option);

          if (onChange) {
            onChange((option as Option)?.value);
          }
        }}
        isClearable
        isDisabled={disabled}
        menuPlacement={menuPlacement}
      />

      {error && <Error>{error}</Error>}
    </InputContainer>
  );
}
