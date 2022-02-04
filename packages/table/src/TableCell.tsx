import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';
import { useTableContext } from './context';

export interface TableCellOptions {
  /**
   * The direction in which the cell text should align
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
}

const TableCellRoot = styled('td', {
  label: 'Table',
  slot: 'td',
  themeKey: 'table',
})<TableCellOptions>(({ variant }) => ({
  borderBottomColor: 'border',
  borderBottomStyle: 'solid',
  borderBottomWidth: 1,
  display: 'table-cell',
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  lineHeight: 'large',
  px: 3,
  py: 4,
  textAlign: 'left',
  verticalAlign: 'inherit',

  '&:first-of-type': {
    pl: 6,
  },

  '&:last-of-type': {
    pr: 6,
  },

  ...(variant === 'body' && {
    color: 'emphasis.primary',
  }),

  ...(variant === 'header' && {
    borderTopColor: 'border',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    color: 'emphasis.secondary',
    fontWeight: 'semibold',
  }),

  ['&[data-align=left]']: {
    textAlign: 'left',
  },

  ['&[data-align=center]']: {
    textAlign: 'center',
  },

  ['&[data-align=right]']: {
    textAlign: 'right',
    flexDirection: 'row-reverse',
  },

  ['&[data-align=justify]']: {
    textAlign: 'justify',
  },
}));

export type TableCellProps = ComponentProps<typeof TableCellRoot>;

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  (props: TableCellProps, ref) => {
    const { align, ...other } = props;

    const { variant } = useTableContext();

    return (
      <TableCellRoot
        as={variant === 'header' ? 'th' : 'td'}
        data-align={align}
        ref={ref}
        variant={variant}
        {...other}
      />
    );
  },
);

TableCell.displayName = 'TableCell';
