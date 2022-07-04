import React from 'react';

import { Alert } from '../../components/Alert';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { Alert } from '@siakit';

<Alert />`;

export function AlertPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Alert</Heading>
        <Card>
          <Flex height={192} padding={64} justify="center" align="center" flex>
            <Alert
              type="info"
              title="Alert info title"
              text="Alert info text example"
            />
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Alert</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>type</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"info" | "success" | "warning" | "danger"`}</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>title</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>text</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
