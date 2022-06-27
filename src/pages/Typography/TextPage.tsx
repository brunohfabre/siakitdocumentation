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

const exampleCode = `import { Text } from "@siakit/text";

<Text />`;

export function TextPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Text</Heading>

        <Card>
          <Flex height={192} padding justify="center" align="center">
            <Text>Text text</Text>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Text</Heading>

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
                      <Text size="sm">{`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"`}</Text>
                    </Flex>
                  </Popover>
                </Flex>
              ),
              default: 'md',
            },
            {
              prop: 'lowContrast',
              type: 'boolean',
              default: 'false',
            },
            {
              prop: 'align',
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
                      <Text size="sm">{`"left" | "center" | "right"`}</Text>
                    </Flex>
                  </Popover>
                </Flex>
              ),
              default: 'left',
            },
          ]}
        />
      </Flex>
    </Flex>
  );
}
