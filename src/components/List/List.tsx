import React, { ReactNode } from 'react';

import { Container } from './styles';

type ListProps = {
  type?: 'unordered' | 'ordered';
  children: ReactNode;
};

export function List({ type = 'unordered', children }: ListProps): JSX.Element {
  return (
    <Container as={type === 'unordered' ? 'ul' : 'ol'}>{children}</Container>
  );
}
