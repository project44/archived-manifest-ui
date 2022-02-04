import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { TableContext } from './context';

export type TableHeaderProps = ComponentProps<typeof TableHeaderRoot>;

const TableHeaderRoot = styled('thead', {
  label: 'Table',
  slot: 'thead',
  themeKey: 'table',
})({ display: 'table-header-group' });

export const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  (props: TableHeaderProps, ref) => (
    <TableContext.Provider value={{ variant: 'header' }}>
      <TableHeaderRoot ref={ref} {...props} />
    </TableContext.Provider>
  ),
);

TableHeader.displayName = 'TableHeader';
