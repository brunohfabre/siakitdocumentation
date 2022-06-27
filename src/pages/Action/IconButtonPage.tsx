import React from 'react';

import { Flex } from '../../components/Flex';
import { IconButton } from '../../components/IconButton';
import { Text } from '../../components/Text';

export function IconButtonPage(): JSX.Element {
  return (
    <Flex justify="center" align="center" gap={128} direction="column">
      <Flex direction="row" align="center" gap={32}>
        <Flex align="center" gap={32} direction="column">
          <Text size="md">sm</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            size="sm"
            icon="HiOutlinePlus"
          />
        </Flex>

        <Flex align="center" gap={32} direction="column">
          <Text size="md">md</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            icon="HiOutlinePlus"
          />
        </Flex>

        <Flex align="center" gap={32} direction="column">
          <Text size="md">lg</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            size="lg"
            icon="HiOutlinePlus"
          />
        </Flex>
      </Flex>

      <Flex direction="row" align="flex-start" gap={32}>
        <Flex align="center" gap={32} direction="column">
          <Text size="md">primary</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            icon="HiOutlinePlus"
          />
        </Flex>

        <Flex align="center" gap={32} direction="column">
          <Text size="md">secondary</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            variant="secondary"
            icon="HiOutlinePlus"
          />
        </Flex>

        <Flex align="center" gap={32} direction="column">
          <Text size="md">ghost</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            variant="ghost"
            icon="HiOutlinePlus"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
