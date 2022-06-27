import React from 'react';

import { Flex } from '../../components/Flex';
import { Rectangle, Ellipse } from '../../components/Shimmer';

export function ShimmerPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Flex gap={64}>
        <Rectangle width={128} height={128} />

        <Ellipse width={128} height={128} />
      </Flex>
    </Flex>
  );
}
