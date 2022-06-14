import * as phosphorIcons from 'phosphor-react';

import { Colors } from '../../hooks/theme';
import { Container } from './styles';

type BadgeProps = {
  color: Colors;
  children: string;
  icon?: keyof typeof phosphorIcons;
};

export function Badge({
  color,
  children,
  icon: iconName,
}: BadgeProps): JSX.Element {
  const icon = iconName ? (phosphorIcons[iconName] as any) : undefined;

  return (
    <Container color={color}>
      {icon && icon.render({ size: 10, weight: 'bold' })}

      {children}
    </Container>
  );
}
