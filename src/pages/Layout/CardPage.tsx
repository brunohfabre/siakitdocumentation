import React from 'react';

import { Card } from '../../components/Card';
import { Flex } from '../../components/Flex';

export function CardPage(): JSX.Element {
  return (
    <Flex padding>
      <Card>
        <Flex padding>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            nemo quam consequatur, modi sit et dolorum beatae maiores
            perferendis. Maiores voluptas inventore quisquam at minima vero!
            Recusandae animi expedita dicta?
          </p>
        </Flex>
      </Card>
    </Flex>
  );
}
