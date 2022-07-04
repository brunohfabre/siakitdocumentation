import React, { useState } from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Dialog } from '../../components/Dialog';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { Dialog } from '@siakit';

<Dialog />`;

export function DialogPage(): JSX.Element {
  const [infoDialogVisible, setInfoDialogVisible] = useState(false);
  const [successDialogVisible, setSuccessDialogVisible] = useState(false);
  const [warningDialogVisible, setWarningDialogVisible] = useState(false);
  const [dangerDialogVisible, setDangerDialogVisible] = useState(false);

  return (
    <>
      <Dialog
        isOpen={infoDialogVisible}
        onRequestClose={() => setInfoDialogVisible(false)}
        title="Info dialog"
        description="Info dialog example"
        type="info"
        submitText="Submit text"
        onSubmit={() => undefined}
      />
      <Dialog
        isOpen={successDialogVisible}
        onRequestClose={() => setSuccessDialogVisible(false)}
        title="Success dialog"
        description="Success dialog example"
        type="success"
        submitText="Submit text"
        onSubmit={() => undefined}
      />
      <Dialog
        isOpen={warningDialogVisible}
        onRequestClose={() => setWarningDialogVisible(false)}
        title="Warning dialog"
        description="Warning dialog example"
        type="warning"
        submitText="Submit text"
        onSubmit={() => undefined}
      />
      <Dialog
        isOpen={dangerDialogVisible}
        onRequestClose={() => setDangerDialogVisible(false)}
        title="Danger dialog"
        description="Danger dialog example"
        type="danger"
        submitText="Submit text"
        onSubmit={() => undefined}
      />

      <Flex flex direction="column" align="center" overflow>
        <Flex width={768} padding={32} direction="column" gap>
          <Heading size="xl">Dialog</Heading>
          <Card>
            <Flex height={192} padding justify="center" align="center" gap flex>
              <Button
                type="button"
                colorScheme="blue"
                onClick={() => setInfoDialogVisible(true)}
              >
                info
              </Button>
              <Button
                type="button"
                colorScheme="green"
                onClick={() => setSuccessDialogVisible(true)}
              >
                success
              </Button>
              <Button
                type="button"
                colorScheme="amber"
                onClick={() => setWarningDialogVisible(true)}
              >
                warning
              </Button>
              <Button
                type="button"
                colorScheme="red"
                onClick={() => setDangerDialogVisible(true)}
              >
                danger
              </Button>
            </Flex>
          </Card>

          <Spacer height />
          <Heading>Anatomy</Heading>
          <CodeHighlight>{exampleCode}</CodeHighlight>

          <Spacer height />
          <Heading>API reference</Heading>
          <Heading size="md">Dialog</Heading>

          <SimpleTable>
            <SimpleTableHeader>
              <SimpleTableItem isHeader>Prop</SimpleTableItem>
              <SimpleTableItem isHeader>Type</SimpleTableItem>
              <SimpleTableItem isHeader>Default</SimpleTableItem>
            </SimpleTableHeader>

            <SimpleTableBody>
              <SimpleTableItem required>description</SimpleTableItem>
              <SimpleTableItem>string</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem required>isOpen</SimpleTableItem>
              <SimpleTableItem>boolean</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem required>onRequestClose</SimpleTableItem>
              <SimpleTableItem>FUNCTION</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem required>onSubmit</SimpleTableItem>
              <SimpleTableItem>FUNCTION</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem required>submitText</SimpleTableItem>
              <SimpleTableItem>string</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem required>title</SimpleTableItem>
              <SimpleTableItem>string</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem required>type</SimpleTableItem>
              <SimpleTableItem
                isEnum
              >{`"info" | "success" | "warning" | "danger"`}</SimpleTableItem>
              <SimpleTableItem />

              <SimpleTableItem>cancelText</SimpleTableItem>
              <SimpleTableItem>string</SimpleTableItem>
              <SimpleTableItem>Cancel</SimpleTableItem>
            </SimpleTableBody>
          </SimpleTable>
        </Flex>
      </Flex>
    </>
  );
}
