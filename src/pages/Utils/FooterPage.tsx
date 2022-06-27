import React from 'react';

import { Button } from '../../components/Button';
import { Flex } from '../../components/Flex';
import { Footer, FooterLeft } from '../../components/Footer';

export function FooterPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Flex width={556} gap={32} direction="column">
        <Footer>
          <Button type="button">button 1</Button>
        </Footer>

        <Footer>
          <FooterLeft>
            <Button type="button">button 1</Button>
          </FooterLeft>
        </Footer>

        <Footer>
          <FooterLeft>
            <Button type="button">button 1</Button>
          </FooterLeft>

          <Button type="button">button 2</Button>
        </Footer>
      </Flex>
    </Flex>
  );
}
