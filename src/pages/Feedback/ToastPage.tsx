import { Button } from '../../components/Button';
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
import { toast } from '../../components/Toast';

const exampleCode = `import { toast } from '@siakit';

toast.info({ title: 'Title', text: 'Example text' });`;

function ToastOptions(): JSX.Element {
  return (
    <SimpleTable>
      <SimpleTableHeader>
        <SimpleTableItem isHeader>Prop</SimpleTableItem>
        <SimpleTableItem isHeader>Type</SimpleTableItem>
        <SimpleTableItem isHeader>Default</SimpleTableItem>
      </SimpleTableHeader>

      <SimpleTableBody>
        <SimpleTableItem>toastId</SimpleTableItem>
        <SimpleTableItem>number | string</SimpleTableItem>
        <SimpleTableItem />

        <SimpleTableItem>delay</SimpleTableItem>
        <SimpleTableItem>number (millis)</SimpleTableItem>
        <SimpleTableItem />
      </SimpleTableBody>
    </SimpleTable>
  );
}

export function ToastPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Toast</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center" gap flex>
            <Button
              type="button"
              colorScheme="blue"
              onClick={() =>
                toast.info({ title: 'Toast title', text: 'Toast text content' })
              }
            >
              info
            </Button>
            <Button
              type="button"
              colorScheme="green"
              onClick={() =>
                toast.success({
                  title: 'Toast title',
                  text: 'Toast text content',
                })
              }
            >
              success
            </Button>
            <Button
              type="button"
              colorScheme="amber"
              onClick={() =>
                toast.warning({
                  title: 'Toast title',
                  text: 'Toast text content',
                })
              }
            >
              warning
            </Button>
            <Button
              type="button"
              colorScheme="red"
              onClick={() =>
                toast.danger({
                  title: 'Toast title',
                  text: 'Toast text content',
                })
              }
            >
              danger
            </Button>

            <Button
              type="button"
              colorScheme="blue"
              onClick={() =>
                toast.custom({
                  title: 'Toast title',
                  message: 'Toast text content',
                  urgent: true,
                  type: 'INFO',
                  timeout: 0,
                  actions: [
                    {
                      action: 'string',
                      label: 'label',
                      backend: false,
                    },
                  ],
                })
              }
            >
              urgent
            </Button>

            <Button
              type="button"
              colorScheme="blue"
              onClick={() =>
                toast.custom({
                  title: 'Toast title',
                  message: 'Toast text content',
                  urgent: false,
                  type: 'ERROR',
                  timeout: 5000,
                  actions: [
                    {
                      action: 'string',
                      label: 'label',
                      backend: false,
                    },
                  ],
                })
              }
            >
              with button
            </Button>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">toast (info, success, warning, danger)</Heading>

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

            <SimpleTableItem required>text</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>options</SimpleTableItem>
            <SimpleTableItem isEnum>
              <ToastOptions />
            </SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">toast (custom)</Heading>

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

            <SimpleTableItem required>message</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>type</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"INFO" | "SUCCESS" | "WARNING" | "ERROR"`}</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>timeout</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>urgent</SimpleTableItem>
            <SimpleTableItem>boolean</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>actions[]</SimpleTableItem>
            <SimpleTableItem isEnum>
              <SimpleTable>
                <SimpleTableHeader>
                  <SimpleTableItem isHeader>Prop</SimpleTableItem>
                  <SimpleTableItem isHeader>Type</SimpleTableItem>
                  <SimpleTableItem isHeader>Default</SimpleTableItem>
                </SimpleTableHeader>

                <SimpleTableBody>
                  <SimpleTableItem required>label</SimpleTableItem>
                  <SimpleTableItem>string</SimpleTableItem>
                  <SimpleTableItem />

                  <SimpleTableItem required>action</SimpleTableItem>
                  <SimpleTableItem>string</SimpleTableItem>
                  <SimpleTableItem />

                  <SimpleTableItem required>backend</SimpleTableItem>
                  <SimpleTableItem>boolean</SimpleTableItem>
                  <SimpleTableItem />
                </SimpleTableBody>
              </SimpleTable>
            </SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
