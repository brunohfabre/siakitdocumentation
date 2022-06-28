import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { Modal } from '../../components/Modal';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import { Tooltip } from '../../components/Tooltip';

const exampleCode = `import { Modal } from '@siakit';

<Modal />`;

export function ModalPage(): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        title="Modal example"
        isOpen={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Flex height={400} justify="center" align="center">
          <Text>Modal example</Text>
        </Flex>
      </Modal>

      <Flex flex direction="column" align="center" overflow>
        <Flex width={768} padding={32} direction="column" gap>
          <Heading size="xl">Modal</Heading>
          <Card>
            <Flex height={192} padding justify="center" align="center">
              <Tooltip content="Tooltip content">
                <Button type="button" onClick={() => setModalVisible(true)}>
                  Click to open modal
                </Button>
              </Tooltip>
            </Flex>
          </Card>

          <Spacer height />
          <Heading>Anatomy</Heading>
          <CodeHighlight>{exampleCode}</CodeHighlight>

          <Spacer height />
          <Heading>API reference</Heading>
          <Heading size="md">Modal</Heading>

          <SimpleTable>
            <SimpleTableHeader>
              <SimpleTableItem isHeader>Prop</SimpleTableItem>
              <SimpleTableItem isHeader>Type</SimpleTableItem>
              <SimpleTableItem isHeader>Default</SimpleTableItem>
            </SimpleTableHeader>

            <SimpleTableBody>
              <SimpleTableItem required>children</SimpleTableItem>
              <SimpleTableItem>ReactNode</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem required>isOpen</SimpleTableItem>
              <SimpleTableItem>boolean</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem required>title</SimpleTableItem>
              <SimpleTableItem>string</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem>align</SimpleTableItem>
              <SimpleTableItem
                isEnum
              >{`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"`}</SimpleTableItem>
              <SimpleTableItem>md</SimpleTableItem>

              <SimpleTableItem>onRequestClose</SimpleTableItem>
              <SimpleTableItem>FUNCTION</SimpleTableItem>
              <SimpleTableItem />
            </SimpleTableBody>
          </SimpleTable>
        </Flex>
      </Flex>
    </>
  );
}
