import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { IconProps } from 'phosphor-react';

import { Colors, useTheme } from '../../hooks/theme';
import { Heading } from '../Heading';
import { Container, Size } from './styles';

type LinkButtonProps = {
  type: 'submit' | 'button';
  children: string;
  colorScheme?: Colors;
  size?: Size;
  onClick: () => void;
  disabled?: boolean;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export function LinkButton({
  children,
  type,
  colorScheme,
  size = 'md',
  onClick,
  disabled,
  icon: Icon,
}: LinkButtonProps): JSX.Element {
  const { colorScheme: themeColorScheme } = useTheme();

  return (
    <Container
      type={type === 'button' ? 'button' : 'submit'}
      colorScheme={colorScheme || themeColorScheme}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 16} weight="bold" />}

      <Heading size={size === 'sm' ? 'xs' : 'sm'}>{children}</Heading>
    </Container>
  );
}
