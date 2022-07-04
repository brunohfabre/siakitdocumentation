import React from 'react';

import { Badge } from '../../components/Badge';
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
import { Tab, TabList, TabPanel, Tabs } from '../../components/Tabs';

const exampleCode = `import { Tabs, TabList, Tab, TabPanel } from '@siakit';

<Tabs>
  <TabList>
    <Tab />
  </TabList>

  <TabPanel />
</Tabs>`;

export function TabsPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Tabs</Heading>
        <Card>
          <Flex height={320} justify="center" align="center" flex>
            <Tabs defaultValue="1">
              <TabList>
                <Tab value="1">item 1</Tab>
                <Tab value="2">item 2</Tab>
                <Tab value="3">
                  item 3 <Badge color="gray">12</Badge>
                </Tab>
                <Tab value="4" disabled>
                  item 4
                </Tab>
              </TabList>

              <TabPanel value="1">
                <Flex width={440}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos maiores sequi quidem deleniti nisi eveniet.
                  </p>
                </Flex>
              </TabPanel>
              <TabPanel value="2">
                <Flex width={440}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos maiores sequi quidem deleniti nisi eveniet.
                  </p>
                </Flex>
              </TabPanel>
              <TabPanel value="3">
                <Flex width={440}>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos maiores sequi quidem deleniti nisi eveniet.
                  </p>
                </Flex>
              </TabPanel>
            </Tabs>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Tabs</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode[]</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">TabList</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>Tab[]</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">Tab</Heading>

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

            <SimpleTableItem required>value</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>disabled</SimpleTableItem>
            <SimpleTableItem>boolean</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">TabPanel</Heading>

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
