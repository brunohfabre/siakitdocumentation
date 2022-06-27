import React from 'react';

import { Button } from '../../components/Button';
import { Flex } from '../../components/Flex';
import { HoverCard } from '../../components/HoverCard';
import { Text } from '../../components/Text';

export function HoverCardPage(): JSX.Element {
  return (
    <Flex justify="center" align="center">
      <HoverCard>
        <Button type="button">hover to card</Button>

        <Flex width={320} padding>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            architecto qui quis ipsum id pariatur asperiores voluptate eveniet
            nisi maiores, natus optio, culpa, possimus reprehenderit doloribus
            placeat in illum harum.
          </Text>
        </Flex>
      </HoverCard>
    </Flex>
  );
}
