import { useRef } from 'react';

import { FormHandles } from '@unform/core';

import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Form, FileInput } from '../../components/Form';
import { Heading } from '../../components/Heading';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { FileInput } from '@atmoutsourcing/siakit';

<FileInput />`;

export function FileInputPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">FileInput</Heading>
        <Card>
          <Flex flex height={240} padding justify="center" align="center">
            <Form ref={formRef} onSubmit={() => undefined}>
              <Flex direction="column" padding={32}>
                <FileInput name="name" placeholder="Placeholder" />
              </Flex>
            </Form>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">FileInput</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>name</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>multiple</SimpleTableItem>
            <SimpleTableItem>boolean</SimpleTableItem>
            <SimpleTableItem>false</SimpleTableItem>
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
