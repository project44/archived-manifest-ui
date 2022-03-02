import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTableBody } from './Table.styles';

export type TableBodyProps = ComponentProps<typeof StyledTableBody>;

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props: TableBodyProps, ref) => (
    <StyledTableBody className="manifestui-table-body" ref={ref} {...props} />
  ),
);

TableBody.displayName = 'TableBody';
