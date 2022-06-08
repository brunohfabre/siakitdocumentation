import { Flex } from '../components/Flex';
import { Tabs, TabList, Tab, TabPanel } from '../components/Tabs';

export function TabsPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Tabs defaultValue="1">
        <TabList>
          <Tab value="1">item 1</Tab>
          <Tab value="2">item 2</Tab>
        </TabList>

        <TabPanel value="1">value 1</TabPanel>
        <TabPanel value="2">value 2</TabPanel>
      </Tabs>
    </Flex>
  );
}
