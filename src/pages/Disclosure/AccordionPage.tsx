import React from 'react';

import { Accordion, AccordionItem } from '../../components/Accordion';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';

export function AccordionPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Flex width={440}>
        <Accordion type="single" collapsible>
          <AccordionItem title="title 1" value="1">
            <Flex padding>
              <Text size="sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus tempora debitis eveniet officiis, fugiat architecto.
                Corporis quisquam quis adipisci corrupti sapiente. Recusandae
                repellendus incidunt praesentium minus placeat, nemo ad dolores.
              </Text>
            </Flex>
          </AccordionItem>

          <AccordionItem title="title 2" value="2">
            <Flex padding>
              <Text size="sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
                vitae unde aliquid praesentium molestias, nobis nisi commodi
                sed, sint, impedit laborum eligendi itaque iste voluptatibus
                beatae! Quia perspiciatis ullam fuga.
              </Text>
            </Flex>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
}
