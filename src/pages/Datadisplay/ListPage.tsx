import { Flex } from '../../components/Flex';
import { List, ListItem } from '../../components/List';

export function ListPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center" direction="column" gap={64}>
      <List>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </List>

      <List type="ordered">
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </List>
    </Flex>
  );
}
