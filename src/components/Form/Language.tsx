import { useEffect, useRef, useState } from 'react';

import * as Popover from '@radix-ui/react-popover';
import { useField } from '@unform/core';
import { X, Check, CaretDown } from 'phosphor-react';
import styled from 'styled-components';

import brasilFlag from '../../assets/flags/brasil.png';
import espanhaFlag from '../../assets/flags/espanha.png';
import estadosunidosFlag from '../../assets/flags/estadosunidos.png';
import { useTheme } from '../../hooks/theme';
import { Flex } from '../Flex';
import { IconButton } from '../IconButton';
import { Text } from '../Text';
import {
  ColorContainer,
  Label,
  InputBody,
  Error,
  ChevronButton,
  LanguageItem,
} from './styles';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
}
type LanguageProps = JSX.IntrinsicElements['input'] & Props;

const Card = styled(Popover.Content)`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[3]};

  padding: 8px 0;

  display: flex;
  flex-direction: column;

  width: 240px;
  outline: unset;
`;

const languages = [
  { title: 'Português do Brasil', locale: 'pt_BR', flag: brasilFlag },
  { title: 'English, US', locale: 'en_US', flag: estadosunidosFlag },
  { title: 'Español', locale: 'es_ES', flag: espanhaFlag },
];

type LanguageType = {
  title: string;
  locale: string;
  flag: string;
};

export function Language({
  name,
  label,
  disabled,
  placeholder,
}: LanguageProps): JSX.Element {
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

            <Flex flex align="center" gap={8}>
              {isFilled && (
                <>
                  <img
                    src={
                      languages.find((item) => item.locale === isFilled)?.flag
                    }
                    alt="country flag"
                    style={{ width: 24 }}
                  />

                  <Text size="sm">
                    {languages.find((item) => item.locale === isFilled)?.title}
                  </Text>
                </>
              )}
            </Flex>

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

            <ChevronButton active={isFocused}>
              <CaretDown size={16} />
            </ChevronButton>
          </InputBody>

          {error && <Error>{error}</Error>}
        </ColorContainer>
      </Popover.Trigger>

      <Popover.Content asChild>
        <Card align="end" sideOffset={4}>
          {languages.map((language) => (
            <LanguageItem
              selected={isFilled === language.locale}
              colorScheme={colorScheme}
              onClick={() => {
                setIsFilled(language.locale);
                setIsFocused(false);
              }}
            >
              <img src={language.flag} alt={`${language.title} flag`} />
              <p>{language.title}</p>

              {isFilled === language.locale && (
                <div>
                  <Check size="12" weight="bold" />
                </div>
              )}
            </LanguageItem>
          ))}
        </Card>
      </Popover.Content>
    </Popover.Root>
  );
}
