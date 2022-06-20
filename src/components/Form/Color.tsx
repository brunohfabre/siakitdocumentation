import { useEffect, useRef, useState } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { useField } from '@unform/core';
import { HiOutlineCheck, HiOutlineChevronDown } from 'react-icons/hi';
import styled from 'styled-components';

import { Colors, colors, useTheme } from '../../hooks/theme';
import { Flex } from '../Flex';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import {
  ColorContainer,
  Label,
  InputBody,
  Error,
  ColorView,
  ColorButton,
  ChevronButton,
} from './styles';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
}
type ColorProps = JSX.IntrinsicElements['input'] & Props;

const Card = styled(Popover.Content)`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};

  padding: 12px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  max-width: 186px;
`;

export function Color({
  name,
  label,
  disabled,
  placeholder,
}: ColorProps): JSX.Element {
  const { colorScheme } = useTheme();

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

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
      getValue: () => {
        return isFilled;
      },
      setValue: (_, value: string) => {
        handleChange(value);
      },
      clearValue: () => {
        setIsFilled('');
      },
    });
  }, [fieldName, registerField, isFilled]);

  function handleClear(event: React.MouseEvent<HTMLElement>): void {
    event.stopPropagation();

    setIsFilled('');

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  return (
    <Popover.Root open={isFocused} onOpenChange={setIsFocused}>
      <Popover.Trigger asChild>
        <ColorContainer disabled={!!disabled}>
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
            {!isFilled && (
              <Text size="sm" lowContrast>
                {placeholder}
              </Text>
            )}

            {isFilled && <ColorView color={isFilled} />}

            <Flex flex padding="0 8px" align="center">
              <Text size="sm">{isFilled}</Text>
            </Flex>

            {isFilled && !disabled && (
              <IconButton
                type="button"
                icon="HiOutlineX"
                size="sm"
                variant="ghost"
                colorScheme="gray"
                onClick={handleClear}
                tabIndex={-1}
              />
            )}

            <ChevronButton active={isFocused}>
              <HiOutlineChevronDown size={16} />
            </ChevronButton>
          </InputBody>

          {error && <Error>{error}</Error>}
        </ColorContainer>
      </Popover.Trigger>

      <Popover.Content asChild>
        <Card align="end" sideOffset={4}>
          {Object.keys(colors).map((item) => (
            <Tooltip content={item} key={item}>
              <ColorButton
                color={item as Colors}
                onClick={() => {
                  setIsFilled(item);
                  setIsFocused(false);
                }}
              >
                {isFilled === item && <HiOutlineCheck size="12" color="#fff" />}
              </ColorButton>
            </Tooltip>
          ))}
        </Card>
      </Popover.Content>
    </Popover.Root>
  );
}
