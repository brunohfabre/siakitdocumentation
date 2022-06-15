import { Button } from '../../components/Button';
import { Dropdown } from '../../components/Dropdown';
import { Flex } from '../../components/Flex';

export function DropdownPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Dropdown
        options={[
          { text: 'item 1', onClick: () => alert('item 1') },
          // { type: 'separator' },
          { type: 'label', text: 'label' },
          {
            text: 'item 2',
            onClick: () => alert('item 2'),

            style: 'info',
          },
          {
            text: 'item 3',
            onClick: () => alert('item 3'),
            style: 'success',
          },
          {
            text: 'item 4',
            onClick: () => alert('item 4'),
            style: 'warning',
          },
          {
            text: 'item 5',
            onClick: () => alert('item 5'),
            style: 'danger',
          },
        ]}
      >
        <Button type="button">dropdown button</Button>
      </Dropdown>
    </Flex>
  );
}
