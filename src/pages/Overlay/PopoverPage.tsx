import React from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { Popover } from '../../components/Popover';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { Popover } from '@siakit';

<Popover>
  /* trigger */

  /* content */
</Popover>`;

export function PopoverPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Popover</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center" flex>
            <Popover>
              <Button type="button">Click to Popover</Button>

              <Flex padding>Popover content</Flex>
            </Popover>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Popover</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode[]</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
