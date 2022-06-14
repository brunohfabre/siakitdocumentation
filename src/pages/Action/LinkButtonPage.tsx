import { Plus } from 'phosphor-react';

import { Flex } from '../../components/Flex';
import { LinkButton } from '../../components/LinkButton';

export function LinkButtonPage(): JSX.Element {
  return (
    <Flex justify="center" align="center" gap={32} direction="row">
      <Flex gap align="flex-end" direction="column">
        <LinkButton type="button" onClick={() => undefined} size="sm">
          Link button
        </LinkButton>
        <LinkButton type="button" onClick={() => undefined}>
          Link button
        </LinkButton>
        <LinkButton type="button" onClick={() => undefined} disabled>
          Link button
        </LinkButton>
      </Flex>

      <Flex gap align="flex-start" direction="column">
        <LinkButton
          type="button"
          onClick={() => undefined}
          size="sm"
          icon="Plus"
        >
          Link button
        </LinkButton>
        <LinkButton type="button" onClick={() => undefined} icon="Plus">
          Link button
        </LinkButton>
        <LinkButton
          type="button"
          onClick={() => undefined}
          icon="Plus"
          disabled
        >
          Link button
        </LinkButton>
      </Flex>
    </Flex>
  );
}