import { ReactElement, ReactNode } from 'react';

import * as HoverCard from '@radix-ui/react-hover-card';

import { Container } from './styles';

type PopoverProps = {
  children: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  content: ReactElement;
};

export function Popover({
  children,
  side = 'top',
  content,
}: PopoverProps): JSX.Element {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>{children}</HoverCard.Trigger>

      <Container side={side} sideOffset={4}>
        {content}
      </Container>
    </HoverCard.Root>
  );
}
