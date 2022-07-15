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
import { Table } from '../../components/Table';

const exampleCode = `import { Table } from '@atmoutsourcing/siakit';

<Table />`;

export function TablePage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">List</Heading>
        <Card>
          <Flex height={192} justify="center" align="center" flex padding={32}>
            <Table
              headers={[
                {
                  label: 'Name',
                  dataIndex: 'name',
                },
                {
                  label: 'Email',
                  dataIndex: 'email',
                },
              ]}
              data={[
                { name: 'John Doe', email: 'johndoe@example.com' },
                { name: 'John Doe', email: 'johndoe@example.com' },
              ]}
            />
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Table</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>headers</SimpleTableItem>
            <SimpleTableItem>HeaderType []</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>data</SimpleTableItem>
            <SimpleTableItem>Object</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>footer</SimpleTableItem>
            <SimpleTableItem>Object</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>actions</SimpleTableItem>
            <SimpleTableItem>ActionType []</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>totalCount</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>currentPage</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>onPageChange</SimpleTableItem>
            <SimpleTableItem>
              FUNCTION {'->'} (page: number) {'=>'} void
            </SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>perPage</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>perPageChange</SimpleTableItem>
            <SimpleTableItem>
              FUNCTION {'->'} (amount: number) {'=>'} void
            </SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>sort</SimpleTableItem>
            <SimpleTableItem>SortType</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>onSort</SimpleTableItem>
            <SimpleTableItem>
              FUNCTION {'->'} (sort: SortType) {'=>'} void
            </SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
