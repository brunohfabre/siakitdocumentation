import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';

import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Grid } from '../../components/Grid';
import { Heading } from '../../components/Heading';
import { IconButton } from '../../components/IconButton';
import { LinkButton } from '../../components/LinkButton';
import { Popover } from '../../components/Popover';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';

const buttonCode = `import { Button } from "../../components/Button";

<Button type="button">
  Text here
</Button>`;

export function ButtonPage(): JSX.Element {
  return (
    <Flex justify="center" flex margin="0 240px 0 0">
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Button</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cumque
          quod nam amet error libero iure maxime quis eius totam, aperiam
          laudantium, quibusdam minima assumenda labore modi, deserunt officiis
          nihil!
        </Text>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{buttonCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Grid columns={3}>
          <Text lowContrast size="sm">
            Prop
          </Text>
          <Text lowContrast size="sm">
            Type
          </Text>
          <Text lowContrast size="sm">
            Default
          </Text>

          <Text>children *</Text>
          <Text>string</Text>
          <Text>--</Text>

          <Text>type *</Text>
          <Flex gap={8} align="center">
            <Text>enum</Text>
            <Popover
              content={
                <Flex padding={8}>
                  <Text size="sm">{`"button" | "submit"`}</Text>
                </Flex>
              }
            >
              <IconButton
                type="button"
                icon="Info"
                colorScheme="gray"
                variant="ghost"
              />
            </Popover>
          </Flex>

          <Text>--</Text>

          <Text>colorScheme</Text>
          <Text>enum</Text>
          <Text>app color scheme</Text>

          <Text>size</Text>
          <Text>enum</Text>
          <Text>md</Text>

          <Text>variant</Text>
          <Text>enum</Text>
          <Text>primary</Text>

          <Text>onClick</Text>
          <Text>function</Text>
          <Text>--</Text>

          <Text>disabled</Text>
          <Text>boolean</Text>
          <Text>false</Text>

          <Text>icon</Text>
          <Text>enum</Text>
          <Text>--</Text>
        </Grid>
      </Flex>
    </Flex>
  );
}
