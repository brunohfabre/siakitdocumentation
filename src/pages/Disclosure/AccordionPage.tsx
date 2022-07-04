import React from 'react';

import { Accordion, AccordionItem } from '../../components/Accordion';
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

const exampleCode = `import { Accordion, AccordionItem } from '@siakit';

<Accordion>
  <AccordionItem />
</Accordion>`;

export function AccordionPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Accordion</Heading>
        <Card>
          <Flex height={320} justify="center" align="center" flex>
            <Flex justify="center" width={400}>
              <Accordion type="single" collapsible>
                <AccordionItem title="title 1" value="1">
                  <Flex padding>
                    <Text size="sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Repellendus tempora debitis eveniet officiis, fugiat
                      architecto. Corporis quisquam quis adipisci corrupti
                      sapiente. Recusandae repellendus incidunt praesentium
                      minus placeat, nemo ad dolores.
                    </Text>
                  </Flex>
                </AccordionItem>

                <AccordionItem title="title 2" value="2">
                  <Flex padding>
                    <Text size="sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Totam vitae unde aliquid praesentium molestias, nobis nisi
                      commodi sed, sint, impedit laborum eligendi itaque iste
                      voluptatibus beatae! Quia perspiciatis ullam fuga.
                    </Text>
                  </Flex>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Accordion</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>AccordionItem[]</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">AccordionItem</Heading>

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

            <SimpleTableItem required>title</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>value</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
