import React from 'react';

import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { ProgressBar } from '../../components/ProgressBar';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { ProgressBar } from '@siakit';

<ProgressBar />`;

export function ProgressBarPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">ProgressBar</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center">
            <Flex flex width="75%">
              <ProgressBar progress={37} showPercentage />
            </Flex>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">ProgressBar</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>progress</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>showPercentage</SimpleTableItem>
            <SimpleTableItem>boolean</SimpleTableItem>
            <SimpleTableItem>false</SimpleTableItem>
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
