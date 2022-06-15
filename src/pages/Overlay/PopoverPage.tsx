import { Button } from '../../components/Button';
import { Flex } from '../../components/Flex';
import { Popover } from '../../components/Popover';

export function PopoverPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Popover
        content={
          <Flex width={392} padding>
            <p>test popover content</p>
          </Flex>
        }
      >
        <Button type="button">Hover to popover</Button>
      </Popover>
    </Flex>
  );
}
