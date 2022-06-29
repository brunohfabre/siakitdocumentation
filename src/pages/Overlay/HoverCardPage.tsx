import React from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { HoverCard } from '../../components/HoverCard';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { HoverCard } from '@siakit';

<HoverCard>
  /* trigger */

  /* content */
</HoverCard>`;

export function HoverCardPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">HoverCard</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center">
            <HoverCard>
              <Button type="button">Hover to show</Button>

              <Flex padding>HoverCard content</Flex>
            </HoverCard>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">HoverCard</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children[]</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
