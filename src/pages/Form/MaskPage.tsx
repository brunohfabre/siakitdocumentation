import React, { useRef } from 'react';

import { FormHandles } from '@unform/core';

import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Form, Mask } from '../../components/Form';
import { Heading } from '../../components/Heading';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';
import { masks } from '../../helpers/masks';

const exampleCode = `import { Mask } from '@siakit';

<Mask />`;

export function MaskPage(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Mask</Heading>
        <Card>
          <Flex flex height={192} padding justify="center" align="center">
            <Form ref={formRef} onSubmit={() => undefined}>
              <Flex direction="column" padding={32}>
                <Mask
                  name="name"
                  label="CPF label"
                  placeholder="CPF placeholder"
                  mask="cpf"
                />
              </Flex>
            </Form>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Mask</Heading>

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

            <SimpleTableItem required>mask</SimpleTableItem>
            <SimpleTableItem isEnum>
              {Object.keys(masks).map((mask, index) =>
                index === 0 ? `"${mask}" ` : `| "${mask}" `,
              )}
            </SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>label</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>placeholder</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
