import { Plus } from 'phosphor-react';

import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';

export function ButtonPage(): JSX.Element {
  return (
    <Flex justify="center" align="center" gap={128}>
      <Flex direction="row" align="flex-end" gap={32}>
        <Flex align="center" gap={32}>
          <Text size="md">sm</Text>

          <Button type="button" onClick={() => undefined} size="sm">
            Button
          </Button>
        </Flex>

        <Flex align="center" gap={32}>
          <Text size="md">md</Text>

          <Button type="button" onClick={() => undefined}>
            Button
          </Button>
        </Flex>

        <Flex align="center" gap={32}>
          <Text size="md">lg</Text>

          <Button type="button" onClick={() => undefined} size="lg">
            Button
          </Button>
        </Flex>
      </Flex>

      <Flex direction="row" align="flex-start" gap={32}>
        <Flex align="center" gap={32}>
          <Text size="md">primary</Text>

          <Button type="button" onClick={() => undefined}>
            Button
          </Button>
        </Flex>

        <Flex align="center" gap={32}>
          <Text size="md">secondary</Text>

          <Button type="button" onClick={() => undefined} variant="secondary">
            Button
          </Button>
        </Flex>

        <Flex align="center" gap={32}>
          <Text size="md">ghost</Text>

          <Button type="button" onClick={() => undefined} variant="ghost">
            Button
          </Button>
        </Flex>
      </Flex>

      <Flex direction="row" align="flex-start" gap={32}>
        <Flex align="center" gap={32}>
          <Text size="md">primary icon</Text>

          <Button type="button" onClick={() => undefined} icon={Plus}>
            Button
          </Button>
        </Flex>

        <Flex align="center" gap={32}>
          <Text size="md">secondary icon</Text>

          <Button
            type="button"
            onClick={() => undefined}
            variant="secondary"
            icon={Plus}
          >
            Button
          </Button>
        </Flex>

        <Flex align="center" gap={32}>
          <Text size="md">ghost icon</Text>

          <Button
            type="button"
            onClick={() => undefined}
            variant="ghost"
            icon={Plus}
          >
            Button
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
