import React from 'react';

import { Flex } from '../../components/Flex';
import { Icon } from '../../components/Icon';

export function IconPage(): JSX.Element {
  return (
    <Flex justify="center" align="center" gap>
      <Icon name="HiHome" size="32" />
    </Flex>
  );
}
