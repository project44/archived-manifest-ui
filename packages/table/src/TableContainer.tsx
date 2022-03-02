import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTableContainer } from './Table.styles';

export type TableContainerProps = ComponentProps<typeof StyledTableContainer>;

export const TableContainer = React.forwardRef<HTMLTableElement, TableContainerProps>(
  (props: TableContainerProps, ref) => (
    <StyledTableContainer className="manifestui-table-container" ref={ref} {...props} />
  ),
);

TableContainer.displayName = 'TableContainer';
