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

const exampleCode = `import { Flex } from '@siakit';

<Flex />`;

export function FlexPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Flex</Heading>

        {/* <Card>
          <Flex height={192} padding justify="center" align="center">
            <Flex />
          </Flex>
        </Card> */}

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Flex</Heading>

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

            <SimpleTableItem>flex</SimpleTableItem>
            <SimpleTableItem>boolean | number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>direction</SimpleTableItem>
            <SimpleTableItem isEnum>{`"row" | "column"`}</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>justify</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"flex-start" | "flex-end" | "center" | "space-between" | "space-around"`}</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>align</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"stretch" | "flex-start" | "flex-end" | "center" | "baseline"`}</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>gap</SimpleTableItem>
            <SimpleTableItem>boolean | number | string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>margin</SimpleTableItem>
            <SimpleTableItem>boolean | number | string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>padding</SimpleTableItem>
            <SimpleTableItem>boolean | number | string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>width</SimpleTableItem>
            <SimpleTableItem>number | string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>height</SimpleTableItem>
            <SimpleTableItem>number | string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>maxWidth</SimpleTableItem>
            <SimpleTableItem>number | string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>maxHeight</SimpleTableItem>
            <SimpleTableItem>number | string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>overflow</SimpleTableItem>
            <SimpleTableItem>boolean | OVERFLOW</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
