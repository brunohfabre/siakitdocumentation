import React from 'react';

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
import { Text } from '../../components/Text';

const exampleCode = `import { Text } from '@siakit';

<Text />`;

export function TextPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Text</Heading>

        <Card>
          <Flex height={192} padding justify="center" align="center">
            <Text>Text text</Text>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Text</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>prop</SimpleTableItem>
            <SimpleTableItem isHeader>type</SimpleTableItem>
            <SimpleTableItem isHeader>default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>align</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"left" | "center" | "right"`}</SimpleTableItem>
            <SimpleTableItem>left</SimpleTableItem>

            <SimpleTableItem>lowContrast</SimpleTableItem>
            <SimpleTableItem>boolean</SimpleTableItem>
            <SimpleTableItem>false</SimpleTableItem>

            <SimpleTableItem>size</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"`}</SimpleTableItem>
            <SimpleTableItem>md</SimpleTableItem>
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
