import React from 'react';

import { Button } from '../../components/Button';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
} from '../../components/Dropdown';
import { DropdownTitle } from '../../components/Dropdown/DropdownTitle';
import { Flex } from '../../components/Flex';

export function DropdownPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Dropdown>
        <Button type="button">dropdown button</Button>

        <DropdownContent>
          <DropdownItem onClick={() => alert('item 1')}>item 1</DropdownItem>
          <DropdownSeparator />

          <DropdownTitle>title 1</DropdownTitle>

          <DropdownItem type="info" onClick={() => alert('item 2')}>
            item 2
          </DropdownItem>
          <DropdownItem type="success" onClick={() => alert('item 3')}>
            item 3
          </DropdownItem>
          <DropdownItem type="warning" onClick={() => alert('item 4')}>
            item 4
          </DropdownItem>
          <DropdownItem
            type="danger"
            onClick={() => alert('item 5')}
            icon="HiOutlineTrash"
          >
            item 5
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </Flex>
  );
}
