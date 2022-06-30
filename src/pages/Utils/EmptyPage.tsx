import React from 'react';

import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Empty } from '../../components/Empty';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { Empty } from '@siakit';

<Empty /`;

export function EmptyPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Empty</Heading>
        <Card>
          <Flex padding justify="center" align="center" gap>
            <Empty
              title="No projects"
              description="Get started by creating a new project"
              actionText="New Project"
              action={() => alert('new project action')}
            />
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Empty</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>title</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>description</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>action</SimpleTableItem>
            <SimpleTableItem>FUNCTION</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>actionText</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
