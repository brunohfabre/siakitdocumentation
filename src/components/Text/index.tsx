import { ReactNode } from 'react';

import { Container, Size } from './styles';

type TextProps = {
  size: Size;
  children: ReactNode;
};

export function Text({ children, size }: TextProps): JSX.Element {
  return <Container size={size}>{children}</Container>;
}
