import { ForwardRefExoticComponent, MouseEvent, RefAttributes } from 'react';

import { IconProps, IconWeight } from 'phosphor-react';

import { Colors, useTheme } from '../../hooks/theme';
import { Size, Variant, Container } from './styles';

type IconButtonProps = {
  type: 'submit' | 'button';
  colorScheme?: Colors;
  size?: Size;
  variant?: Variant;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  tabIndex?: number;
  weight?: IconWeight;
};

export function IconButton({
  type,
  colorScheme,
  size = 'md',
  variant = 'primary',
  onClick,
  disabled,
  icon: Icon,
  tabIndex,
  weight = 'bold',
  ...rest
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
      tabIndex={tabIndex}
      {...rest}
    >
      <Icon size={iconSize()} weight={weight} />
    </Container>
  );
}
