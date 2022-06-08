import { ReactNode } from 'react';

import { Heading } from '../Heading';
import { Container, More, Hover } from './styles';

type AvatarGroupProps = {
  children: ReactNode[];
};

export function AvatarGroup({ children }: AvatarGroupProps): JSX.Element {
  return (
    <Container>
      {children?.length > 5 && (
        <Hover>
          <More>
            <Heading size="md">+{children.length - 5}</Heading>
          </More>
        </Hover>
      )}

      {children?.length < 6
        ? children.map((item) => <Hover>{item}</Hover>)
        : children.slice(0, 5).map((item) => <Hover>{item}</Hover>)}
    </Container>
  );
}
