import React from 'react';

import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { IconButton } from '../../components/IconButton';
import { Popover } from '../../components/Popover';
import { SimpleTable } from '../../components/SimpleTable';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';

const exampleCode = `import { Heading } from "@siakit/heading";

<Heading />`;

export function HeadingPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Heading</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center">
            <Heading>Heading text</Heading>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Heading</Heading>

        <SimpleTable
          header={[
            { title: 'Prop', dataIndex: 'prop' },
            { title: 'Type', dataIndex: 'type' },
            { title: 'Default', dataIndex: 'default' },
          ]}
          data={[
            {
              prop: 'children*',
              type: 'string',
              default: '--',
            },
            {
              prop: 'size',
              type: (
                <Flex gap={4} align="center">
                  <Text size="sm">enum</Text>

                  <Popover>
                    <IconButton
                      type="button"
                      icon="HiInformationCircle"
                      colorScheme="gray"
                      variant="ghost"
                    />

                    <Flex padding={12}>
                      <Text size="sm">{`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`}</Text>
                    </Flex>
                  </Popover>
                </Flex>
              ),
              default: 'lg',
            },
          ]}
        />
      </Flex>
    </Flex>
  );
}
