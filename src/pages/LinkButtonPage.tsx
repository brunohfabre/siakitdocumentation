import { Plus } from 'phosphor-react';

import { Flex } from '../components/Flex';
import { LinkButton } from '../components/LinkButton';

export function LinkButtonPage(): JSX.Element {
  return (
    <Flex justifyContent="center" alignItems="center" gap={32} direction="row">
      <Flex gap alignItems="flex-end">
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

      <Flex gap alignItems="flex-start">
        <LinkButton
          type="button"
          onClick={() => undefined}
          size="sm"
          icon={Plus}
        >
          Link button
        </LinkButton>
        <LinkButton type="button" onClick={() => undefined} icon={Plus}>
          Link button
        </LinkButton>
        <LinkButton
          type="button"
          onClick={() => undefined}
          icon={Plus}
          disabled
        >
          Link button
        </LinkButton>
      </Flex>
    </Flex>
  );
}
