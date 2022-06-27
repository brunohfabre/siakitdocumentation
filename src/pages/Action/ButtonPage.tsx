import React from 'react';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { IconButton } from '../../components/IconButton';
import { LinkButton } from '../../components/LinkButton';
import { Popover } from '../../components/Popover';
import { SimpleTable } from '../../components/SimpleTable';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import { colors } from '../../hooks/theme';

const exampleCode = `import { Button } from "@siakit/button";

<Button />`;

export function ButtonPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Button</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center">
            <Button type="button" onClick={() => undefined}>
              Text here
            </Button>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Button</Heading>

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
              prop: 'type*',
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
                      <Text size="sm">{`"button" | "submit"`}</Text>
                    </Flex>
                  </Popover>
                </Flex>
              ),
              default: '--',
            },
            {
              prop: 'colorScheme',
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

                    <Flex padding={12} width={440}>
                      <Text size="sm" align="center">
                        {Object.keys(colors).map((color, index) =>
                          index === 0 ? `"${color}" ` : `| "${color}" `,
                        )}
                      </Text>
                    </Flex>
                  </Popover>
                </Flex>
              ),
              default: 'app color scheme',
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
                      <Text size="sm" align="center">
                        {`"sm" | "md" | "lg"`}
                      </Text>
                    </Flex>
                  </Popover>
                </Flex>
              ),
              default: 'md',
            },
            {
              prop: 'variant',
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
                      <Text size="sm" align="center">
                        {`"primary" | "secondary" | "ghost"`}
                      </Text>
                    </Flex>
                  </Popover>
                </Flex>
              ),
              default: 'primary',
            },
            {
              prop: 'onClick*',
              type: 'function',
              default: '--',
            },
            {
              prop: 'disabled',
              type: 'boolean',
              default: 'false',
            },
            {
              prop: 'icon',
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
                      <Text size="sm" align="center">
                        <LinkButton
                          onClick={() =>
                            window.open(
                              'https://react-icons.github.io/react-icons/',
                            )
                          }
                        >
                          React icons page
                        </LinkButton>
                      </Text>
                    </Flex>
                  </Popover>
                </Flex>
              ),
              default: '--',
            },
          ]}
        />
      </Flex>
    </Flex>
  );
}
