import React from 'react';

import { Badge } from '../../components/Badge';
import { Flex } from '../../components/Flex';
import { Tabs, TabList, Tab, TabPanel } from '../../components/Tabs';

export function TabsPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Flex width={440} height={128}>
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                maiores sequi quidem deleniti nisi eveniet.
              </p>
            </Flex>
          </TabPanel>
          <TabPanel value="2">
            <Flex width={440}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                maiores sequi quidem deleniti nisi eveniet.
              </p>
            </Flex>
          </TabPanel>
          <TabPanel value="3">
            <Flex width={440}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                maiores sequi quidem deleniti nisi eveniet.
              </p>
            </Flex>
          </TabPanel>
        </Tabs>
      </Flex>
    </Flex>
  );
}
