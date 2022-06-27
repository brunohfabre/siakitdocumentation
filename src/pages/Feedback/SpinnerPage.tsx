import React from 'react';

import { Flex } from '../../components/Flex';
import { Spinner } from '../../components/Spinner';

export function SpinnerPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Spinner />
    </Flex>
  );
}
