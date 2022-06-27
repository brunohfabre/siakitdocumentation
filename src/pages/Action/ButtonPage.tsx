import React from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { LinkButton } from '../../components/LinkButton';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';
import { colors } from '../../hooks/theme';

const exampleCode = `import { Button } from '@siakit';

<Button />`;

export function ButtonPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Button</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center">
            <Button type="button" onClick={() => undefined}>
              Text here
            </Button>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Button</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>type</SimpleTableItem>
            <SimpleTableItem isEnum>{`"button" | "submit"`}</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>colorScheme</SimpleTableItem>
            <SimpleTableItem isEnum>
              {Object.keys(colors).map((color, index) =>
                index === 0 ? `"${color}" ` : `| "${color}" `,
              )}
            </SimpleTableItem>
            <SimpleTableItem>APP_COLOR_SCHEME</SimpleTableItem>

            <SimpleTableItem>size</SimpleTableItem>
            <SimpleTableItem isEnum>{`"sm" | "md" | "lg"`}</SimpleTableItem>
            <SimpleTableItem>md</SimpleTableItem>

            <SimpleTableItem>variant</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"primary" | "secondary" | "ghost"`}</SimpleTableItem>
            <SimpleTableItem>primary</SimpleTableItem>

            <SimpleTableItem required>onClick</SimpleTableItem>
            <SimpleTableItem>function</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>disabled</SimpleTableItem>
            <SimpleTableItem>boolean</SimpleTableItem>
            <SimpleTableItem>false</SimpleTableItem>

            <SimpleTableItem>icon</SimpleTableItem>
            <SimpleTableItem isEnum>
              <LinkButton
                onClick={() =>
                  window.open('https://react-icons.github.io/react-icons/')
                }
              >
                react-icons docs
              </LinkButton>
            </SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
