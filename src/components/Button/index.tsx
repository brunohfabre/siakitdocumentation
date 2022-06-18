import { forwardRef } from 'react';

import * as phosphorIcons from 'phosphor-react';

import { Colors, useTheme } from '../../hooks/theme';
import { Heading } from '../Heading';
import { Container, Size, Variant } from './styles';

type ButtonProps = {
  type: 'submit' | 'button';
  children: string;
  colorScheme?: Colors;
  size?: Size;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
  icon?: keyof typeof phosphorIcons;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type,
      colorScheme,
      size = 'md',
      variant = 'primary',
      onClick,
      disabled,
      icon: iconName,
      ...rest
    },
    ref,
  ) => {
    const { colorScheme: themeColorScheme } = useTheme();

    function iconSize(): number {
      if (size === 'sm') {
        return 12;
      }

      if (size === 'lg') {
        return 20;
      }

      return 16;
    }

    const icon = iconName ? (phosphorIcons[iconName] as any) : undefined;

    return (
      <Container
        ref={ref}
        type={type === 'button' ? 'button' : 'submit'}
        colorScheme={colorScheme || themeColorScheme}
        size={size}
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {icon && icon.render({ size: iconSize(), weight: 'bold' })}

        <Heading size={size === 'sm' ? 'xs' : 'sm'}>{children}</Heading>
      </Container>
    );
  },
);
