import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTableHeader } from './Table.styles';

export type TableHeaderProps = ComponentProps<typeof StyledTableHeader>;

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  (props: TableHeaderProps, ref) => (
    <StyledTableHeader className="manifestui-table-header" ref={ref} {...props} />
  ),
);

TableHeader.displayName = 'TableHeader';
