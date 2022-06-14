import * as phosphorIcons from 'phosphor-react';

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
  icon?: keyof typeof phosphorIcons;
};

export function LinkButton({
  children,
  type,
  colorScheme,
  size = 'md',
  onClick,
  disabled,
  icon: iconName,
}: LinkButtonProps): JSX.Element {
  const { colorScheme: themeColorScheme } = useTheme();

  const icon = iconName ? (phosphorIcons[iconName] as any) : undefined;

  return (
    <Container
      type={type === 'button' ? 'button' : 'submit'}
      colorScheme={colorScheme || themeColorScheme}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon.render({ size: size === 'sm' ? 12 : 16, weight: 'bold' })}

      <Heading size={size === 'sm' ? 'xs' : 'sm'}>{children}</Heading>
    </Container>
  );
}
