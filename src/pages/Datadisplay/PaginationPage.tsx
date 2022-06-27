import React, { useState } from 'react';

import { Flex } from '../../components/Flex';
import { Pagination } from '../../components/Pagination';

export function PaginationPage(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(9);
  const [perPage, setPerPage] = useState(20);

  return (
    <Flex flex justify="center" align="center">
      <Flex width={640}>
        <Pagination
          totalCount={1000}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          perPage={perPage}
          perPageChange={setPerPage}
        />
      </Flex>
    </Flex>
  );
}
