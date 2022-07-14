import { useState } from 'react';

import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { Pagination } from '../../components/Pagination';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { Pagination } from '@siakit';

<Pagination />`;

export function PaginationPage(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(9);
  const [perPage, setPerPage] = useState(20);

  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Pagination</Heading>
        <Card>
          <Flex height={192} padding={32} justify="center" align="center" flex>
            <Pagination
              totalCount={1000}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
              perPage={perPage}
              perPageChange={setPerPage}
            />
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Pagination</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>totalCount</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>currentPage</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>onPageChange</SimpleTableItem>
            <SimpleTableItem>
              FUNCTION {'->'} (page: number) {'=>'} void
            </SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>perPage</SimpleTableItem>
            <SimpleTableItem>number</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>onPageChange</SimpleTableItem>
            <SimpleTableItem>
              FUNCTION {'->'} (page: amount) {'=>'} void
            </SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
