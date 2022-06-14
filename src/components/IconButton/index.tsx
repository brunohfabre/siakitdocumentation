import * as phosphorIcons from 'phosphor-react';

import { Colors, useTheme } from '../../hooks/theme';
import { Size, Variant, Container } from './styles';

type IconButtonProps = {
  type: 'submit' | 'button';
  colorScheme?: Colors;
  size?: Size;
  variant?: Variant;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  icon: keyof typeof phosphorIcons;
  tabIndex?: number;
  weight?: phosphorIcons.IconWeight;
};

export function IconButton({
  type,
  colorScheme,
  size = 'md',
  variant = 'primary',
  onClick,
  disabled,
  icon: iconName,
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

  const icon = iconName ? (phosphorIcons[iconName] as any) : undefined;

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
      {icon && icon.render({ size: iconSize(), weight })}
    </Container>
  );
}
