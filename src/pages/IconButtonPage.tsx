import { Plus } from 'phosphor-react';

import { Flex } from '../components/Flex';
import { IconButton } from '../components/IconButton';
import { Text } from '../components/Text';

export function IconButtonPage(): JSX.Element {
  return (
    <Flex justifyContent="center" alignItems="center" gap={128}>
      <Flex direction="row" alignItems="flex-end" gap={32}>
        <Flex alignItems="center" gap={32}>
          <Text size="md">sm</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            size="sm"
            icon={Plus}
          />
        </Flex>

        <Flex alignItems="center" gap={32}>
          <Text size="md">md</Text>

          <IconButton type="button" onClick={() => undefined} icon={Plus} />
        </Flex>

        <Flex alignItems="center" gap={32}>
          <Text size="md">lg</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            size="lg"
            icon={Plus}
          />
        </Flex>
      </Flex>

      <Flex direction="row" alignItems="flex-start" gap={32}>
        <Flex alignItems="center" gap={32}>
          <Text size="md">primary</Text>

          <IconButton type="button" onClick={() => undefined} icon={Plus} />
        </Flex>

        <Flex alignItems="center" gap={32}>
          <Text size="md">secondary</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            variant="secondary"
            icon={Plus}
          />
        </Flex>

        <Flex alignItems="center" gap={32}>
          <Text size="md">ghost</Text>

          <IconButton
            type="button"
            onClick={() => undefined}
            variant="ghost"
            icon={Plus}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
