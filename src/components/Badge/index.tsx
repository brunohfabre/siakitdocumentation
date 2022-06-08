import { ForwardRefExoticComponent, RefAttributes } from 'react';

import { IconProps } from 'phosphor-react';

import { Colors } from '../../hooks/theme';
import { Container } from './styles';

type BadgeProps = {
  color: Colors;
  children: string;
  icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export function Badge({
  color,
  children,
  icon: Icon,
}: BadgeProps): JSX.Element {
  return (
    <Container color={color}>
      {Icon && <Icon size={10} weight="bold" />}

      {children}
    </Container>
  );
}
