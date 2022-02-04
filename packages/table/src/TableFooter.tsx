import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { TableContext } from './context';

export type TableFooterProps = ComponentProps<typeof TableFooterRoot>;

const TableFooterRoot = styled('tfoot', {
  label: 'Table',
  slot: 'tfoot',
  themeKey: 'table',
})({ display: 'table-footer-group' });

export const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  (props: TableFooterProps, ref) => (
    <TableContext.Provider value={{ variant: 'header' }}>
      <TableFooterRoot ref={ref} {...props} />
    </TableContext.Provider>
  ),
);

TableFooter.displayName = 'TableFooter';
