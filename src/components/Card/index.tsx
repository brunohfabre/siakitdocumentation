import { forwardRef, ReactNode } from 'react';

import { FlexProps } from '../Flex/styles';
import { Container } from './styles';

interface CardProps extends FlexProps {
  children: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Container ref={ref} {...rest}>
        {children}
      </Container>
    );
  },
);
