import * as React from 'react';
import { Pagination, PaginationProps } from '@manifest-ui/pagination';
import { StyledTablePagination } from './Table.styles';

export type TablePaginationProps = PaginationProps;

export const TablePagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  (props: TablePaginationProps, ref) => (
    <StyledTablePagination className="manifestui-table-pagination">
      <Pagination ref={ref} {...props} />
    </StyledTablePagination>
  ),
);

TablePagination.displayName = 'TablePagination';
