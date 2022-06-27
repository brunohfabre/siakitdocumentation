import React from 'react';

import { Avatar } from '../../components/Avatar';
import { AvatarGroup } from '../../components/AvatarGroup';
import { Flex } from '../../components/Flex';

export function AvatarGroupPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <AvatarGroup>
        <Avatar src="https://github.com/brunohfabre.png" name="Bruno Fabre" />
        <Avatar src="https://github.com/diego3g.png" name="Diego Fernandes" />
        <Avatar
          src="https://github.com/vinicius-hsouza.png"
          name="Vinicius Henrique de Souza"
        />
        <Avatar
          src="https://github.com/RafaelFiorotto.png"
          name="Rafael Fiorotto"
        />
        <Avatar
          src="https://github.com/cleitonsouza.png"
          name="Cleiton Souza"
        />
        <Avatar
          src="https://github.com/pellizzetti.png"
          name="
Guilherme Pellizzetti"
        />
        <Avatar
          src="https://github.com/micaellimedeiros.png"
          name="Micaelli Medeiros"
        />
      </AvatarGroup>
    </Flex>
  );
}
