import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';
import { Tooltip } from '../../components/Tooltip';

const exampleCode = `import { Tooltip } from '@atmoutsourcing/siakit';

<Tooltip />`;

export function TooltipPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Tooltip</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center" flex>
            <Tooltip content="Tooltip content">
              <Button type="button">Hover to tooltip</Button>
            </Tooltip>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Tooltip</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>content</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>side</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"top" | "right" | "bottom" | "left"`}</SimpleTableItem>
            <SimpleTableItem>top</SimpleTableItem>

            <SimpleTableItem>align</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"start" | "center" | "end"`}</SimpleTableItem>
            <SimpleTableItem>center</SimpleTableItem>
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
