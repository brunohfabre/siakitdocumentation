import { ReactNode } from 'react';

import { Container } from './styles';

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps): JSX.Element {
  return <Container>{children}</Container>;
}
