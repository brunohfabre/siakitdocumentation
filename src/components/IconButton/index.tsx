import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { IconProps } from 'phosphor-react';

import { Colors, useTheme } from '../../hooks/theme';
import { Size, Variant, Container } from './styles';

type IconButtonProps = {
  type: 'submit' | 'button';
  colorScheme?: Colors;
  size?: Size;
  variant?: Variant;
  onClick: () => void;
  disabled?: boolean;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export function IconButton({
  type,
  colorScheme,
  size = 'md',
  variant = 'primary',
  onClick,
  disabled,
  icon: Icon,
}: IconButtonProps): JSX.Element {
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
      <Icon size={iconSize()} weight="bold" />
    </Container>
  );
}