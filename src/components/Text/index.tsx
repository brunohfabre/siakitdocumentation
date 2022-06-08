import { ReactNode } from 'react';

import { Container, Size } from './styles';

type TextProps = {
  size?: Size;
  children: ReactNode;
  lowContrast?: boolean;
};

export function Text({
  children,
  size = 'md',
  lowContrast = false,
}: TextProps): JSX.Element {
  return (
    <Container size={size} lowContrast={lowContrast}>
      {children}
    </Container>
  );
}
