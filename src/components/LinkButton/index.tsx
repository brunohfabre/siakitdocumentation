import { icons } from '../../helpers/icons';
import { Colors, useTheme } from '../../hooks/theme';
import { Heading } from '../Heading';
import { Container, Size } from './styles';

type LinkButtonProps = {
  type?: 'submit' | 'button';
  children: string;
  colorScheme?: Colors;
  size?: Size;
  onClick: () => void;
  disabled?: boolean;
  icon?: keyof typeof icons;
};

export function LinkButton({
  children,
  type = 'button',
  colorScheme,
  size = 'md',
  onClick,
  disabled,
  icon,
}: LinkButtonProps): JSX.Element {
  const { colorScheme: themeColorScheme } = useTheme();

  const Icon = icon ? icons[icon] : undefined;

  return (
    <Container
      type={type === 'button' ? 'button' : 'submit'}
      colorScheme={colorScheme || themeColorScheme}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : 16} />}

      <Heading size={size === 'sm' ? 'xs' : 'sm'}>{children}</Heading>
    </Container>
  );
}
