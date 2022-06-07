import { ReactNode } from 'react';

import { Container } from './styles';

type CardProps = {
  children: ReactNode;
};

export function Card({ children, ...rest }: CardProps): JSX.Element {
  return <Container {...rest}>{children}</Container>;
}
