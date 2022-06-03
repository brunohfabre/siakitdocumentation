import { Plus } from 'phosphor-react';

import { Button } from '../components/Button';
import { Flex } from '../components/Flex';

export function ButtonPage(): JSX.Element {
  return (
    <Flex direction="row">
      <Flex>
        <Button
          type="button"
          onClick={() => undefined}
          colorScheme="red"
          leftIcon={Plus}
        >
          Button primary
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => undefined}
          colorScheme="red"
        >
          Button secondary
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => undefined}
          colorScheme="red"
        >
          Button ghost
        </Button>

        <Button
          type="button"
          onClick={() => undefined}
          colorScheme="red"
          disabled
        >
          Button primary
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => undefined}
          colorScheme="red"
          disabled
        >
          Button secondary
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => undefined}
          colorScheme="red"
          disabled
        >
          Button ghost
        </Button>
      </Flex>

      <Flex>
        <Button
          type="button"
          onClick={() => undefined}
          size="sm"
          leftIcon={Plus}
        >
          Button primary
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => undefined}
          size="sm"
        >
          Button secondary
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => undefined}
          size="sm"
        >
          Button ghost
        </Button>

        <Button type="button" onClick={() => undefined} disabled size="sm">
          Button primary
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => undefined}
          disabled
          size="sm"
        >
          Button secondary
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => undefined}
          disabled
          size="sm"
        >
          Button ghost
        </Button>
      </Flex>

      <Flex>
        <Button
          type="button"
          onClick={() => undefined}
          size="lg"
          leftIcon={Plus}
          rightIcon={Plus}
        >
          Button primary
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => undefined}
          size="lg"
        >
          Button secondary
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => undefined}
          size="lg"
        >
          Button ghost
        </Button>

        <Button type="button" onClick={() => undefined} disabled size="lg">
          Button primary
        </Button>

        <Button
          type="button"
          variant="secondary"
          onClick={() => undefined}
          disabled
          size="lg"
        >
          Button secondary
        </Button>

        <Button
          type="button"
          variant="ghost"
          onClick={() => undefined}
          disabled
          size="lg"
        >
          Button ghost
        </Button>
      </Flex>
    </Flex>
  );
}
