import React, { ReactNode } from 'react';

import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container,
  Size,
} from './styles';

type HeadingProps = {
  size?: Size;
  children: ReactNode;
};

export function Heading({ children, size = 'lg' }: HeadingProps): JSX.Element {
  if (size === '5xl') {
    return <Container1>{children}</Container1>;
  }

  if (size === '4xl') {
    return <Container2>{children}</Container2>;
  }

  if (size === '3xl') {
    return <Container3>{children}</Container3>;
  }

  if (size === '2xl') {
    return <Container4>{children}</Container4>;
  }

  if (size === 'xl') {
    return <Container5>{children}</Container5>;
  }

  if (size === 'lg') {
    return <Container6>{children}</Container6>;
  }

  return <Container size={size}>{children}</Container>;
}
