import React from 'react';

import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { Spacer } from '../../components/Spacer';
import { Spinner } from '../../components/Spinner';
import { Text } from '../../components/Text';

const exampleCode = `import { Spinner } from '@siakit';

<Spinner />`;

export function SpinnerPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Spinner</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center">
            <Spinner />
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Spinner</Heading>

        <Text>No props</Text>
      </Flex>
    </Flex>
  );
}
