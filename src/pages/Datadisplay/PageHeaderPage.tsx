import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { PageHeader } from '../../components/PageHeader';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { List } from '@atmoutsourcing/siakit';

<PageHeader />`;

export function PageHeaderPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">PageHeader</Heading>
        <Card>
          <Flex height={192} justify="center" align="center" flex padding={64}>
            <PageHeader
              onGoBack={() => alert('go back action')}
              title="Page title"
            />
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">PageHeader</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>title</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>onGoBack</SimpleTableItem>
            <SimpleTableItem>FUNCTION</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>children</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
