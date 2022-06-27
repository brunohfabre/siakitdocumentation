import React from 'react';

import { Empty } from '../../components/Empty';
import { Flex } from '../../components/Flex';

export function EmptyPage(): JSX.Element {
  return (
    <Flex flex>
      <Empty
        title="No projects"
        description="Get started by creating a new project"
        actionText="New Project"
        action={() => alert('new project action')}
      />
    </Flex>
  );
}
