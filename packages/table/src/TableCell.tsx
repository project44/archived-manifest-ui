import * as React from 'react';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTableCell } from './Table.styles';
import { useMergedRef } from '@manifest-ui/hooks';

export interface TableCellOptions {
  /**
   * The direction in which the cell text should align
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
}

export interface TableCellProps
  extends Omit<ComponentProps<typeof StyledTableCell>, 'align'>,
    TableCellOptions {}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (props: TableCellProps, ref) => {
    const { align, children, onMouseEnter, ...other } = props;

    const title = typeof children === 'string' ? children : '';

    const cellRef = React.useRef<HTMLTableCellElement>(null);

    const [isOverflown, setIsOverflown] = React.useState(false);

    const handleMouseEnter = React.useCallback(() => {
      const cell = cellRef?.current;

      if (cell) {
        setIsOverflown(cell.scrollWidth > cell.offsetWidth);
      }
    }, [cellRef]);

    return (
      <StyledTableCell
        className="manifestui-table-cell"
        data-align={align}
        onMouseEnter={chainCallbacks(handleMouseEnter, onMouseEnter)}
        ref={useMergedRef(cellRef, ref)}
        title={isOverflown ? title : undefined}
        {...other}
      >
        {children}
      </StyledTableCell>
    );
  },
);

TableCell.displayName = 'TableCell';
