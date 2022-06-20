import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Grid } from '../../components/Grid';
import { Heading } from '../../components/Heading';
import { HoverCard } from '../../components/HoverCard';
import { IconButton } from '../../components/IconButton';
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
        <Card>
          <Flex height={192} padding justify="center" align="center">
            <Button type="button" onClick={() => undefined}>
              Text here
            </Button>
          </Flex>
        </Card>

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
            <HoverCard>
              <IconButton
                type="button"
                icon="HiOutlineInformationCircle"
                colorScheme="gray"
                variant="ghost"
              />

              <Flex padding={8}>
                <Text size="sm">{`"button" | "submit"`}</Text>
              </Flex>
            </HoverCard>
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
