import * as React from 'react';
import { TableContext, TableContextOptions } from './context';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTable } from './Table.styles';

export interface TableProps
  extends Omit<ComponentProps<typeof StyledTable>, 'onMouseEnter' | 'onMouseLeave'>,
    TableContextOptions {}

export const Table = React.forwardRef<HTMLTableElement, TableProps>((props: TableProps, ref) => {
  const { showHover = false, onMouseEnter, onMouseLeave, ...other } = props;

  return (
    <TableContext.Provider value={{ onMouseEnter, onMouseLeave, showHover }}>
      <StyledTable className="manifestui-table" ref={ref} {...other} />
    </TableContext.Provider>
  );
});

Table.displayName = 'Table';
