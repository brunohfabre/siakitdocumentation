import { ReactNode } from 'react';

import { Avatar } from '../Avatar';
import { Card } from '../Card';
import { Container, AvatarContainer, Line } from './styles';

type TimelineItemProps = {
  name: string;
  children: ReactNode;
};

export function TimelineItem({
  name,
  children,
}: TimelineItemProps): JSX.Element {
  return (
    <Container>
      <AvatarContainer>
        <Avatar name={name} />
        {/* <Line /> */}
      </AvatarContainer>

      <Card>{children}</Card>
    </Container>
  );
}
