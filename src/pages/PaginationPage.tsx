import { useState } from 'react';

import { Flex } from '../components/Flex';
import { Pagination } from '../components/Pagination';

export function PaginationPage(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(9);

  return (
    <Flex flex justify="center" align="center">
      <Flex width={640}>
        <Pagination
          totalCount={1000}
          perPage={20}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          perPageChange={(amount) => console.log(amount)}
        />
      </Flex>
    </Flex>
  );
}
