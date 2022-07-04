import React from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Footer, FooterLeft } from '../../components/Footer';
import { Heading } from '../../components/Heading';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { Footer, FooterLeft } from '@siakit';

<Footer>
  <FooterLeft>
    /* left content */
  </FooterLeft>

  /* right content */
</Footer>`;

export function FooterPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Footer</Heading>
        <Card>
          <Flex
            height={192}
            padding={32}
            justify="center"
            align="center"
            gap
            flex
          >
            <Footer>
              <FooterLeft>
                <Button type="button">Left content</Button>
              </FooterLeft>

              <Button type="button">Right content</Button>
            </Footer>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Footer</Heading>

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
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">FooterLeft</Heading>

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
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
