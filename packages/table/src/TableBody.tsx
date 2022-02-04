import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { TableContext } from './context';

export type TableBodyProps = ComponentProps<typeof TableBodyRoot>;

const TableBodyRoot = styled('tbody', {
  label: 'Table',
  slot: 'tbody',
  themeKey: 'table',
})({ display: 'table-row-group' });

export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props: TableBodyProps, ref) => (
    <TableContext.Provider value={{ variant: 'body' }}>
      <TableBodyRoot ref={ref} {...props} />
    </TableContext.Provider>
  ),
);

TableBody.displayName = 'TableBody';
