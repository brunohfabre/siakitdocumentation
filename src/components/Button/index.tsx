import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { IconProps } from 'phosphor-react';

import { Colors, useTheme } from '../../hooks/theme';
import { Heading } from '../Heading';
import { Container, Size, Variant } from './styles';

type ButtonProps = {
  type: 'submit' | 'button';
  children: string;
  colorScheme?: Colors;
  size?: Size;
  variant?: Variant;
  onClick: () => void;
  disabled?: boolean;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export function Button({
  children,
  type,
  colorScheme,
  size = 'md',
  variant = 'primary',
  onClick,
  disabled,
  icon: Icon,
}: ButtonProps): JSX.Element {
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

  return (
    <Container
      type={type === 'button' ? 'button' : 'submit'}
      colorScheme={colorScheme || themeColorScheme}
      size={size}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={iconSize()} weight="bold" />}

      <Heading size={size === 'sm' ? 'xs' : 'sm'}>{children}</Heading>
    </Container>
  );
}
