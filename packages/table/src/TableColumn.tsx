import * as React from 'react';
import { StyledTableColumn, StyledTableSortButton, StyledTableSortIcon } from './Table.styles';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';

export interface TableColumnOptions {
  /**
   * Whether the column is currently sorted
   */
  isActive?: boolean;
  /**
   *  Whether the column is sortable.
   *
   * @default false
   */
  isSortable?: boolean;
  /**
   * The direction in which the column should align.
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  /**
   * The sort direction of the column.
   *
   * @default 'asc'
   */
  sortDirection?: 'asc' | 'desc';
  /**
   * Callback executed on column click, used for column sort only.
   */
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  /**
   * Callback executed on column hover, used for column sort only.
   */
  onMouseEnter?(event: React.MouseEvent<HTMLButtonElement>): void;
  /**
   * Callback executed on column hover, used for column sort only.
   */
  onMouseLeave?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export interface TableColumnProps
  extends Omit<
      ComponentProps<typeof StyledTableColumn>,
      'align' | 'onClick' | 'onMouseEnter' | 'onMouseLeave'
    >,
    TableColumnOptions {}

export const TableColumn = React.forwardRef<HTMLTableCellElement, TableColumnProps>(
  (props: TableColumnProps, ref) => {
    const {
      align,
      children,
      isActive,
      isSortable,
      onClick,
      onMouseEnter,
      onMouseLeave,
      sortDirection = 'asc',
      ...other
    } = props;

    const [isHovered, setIsHovered] = React.useState(false);

    let ariaSort = null;

    if (sortDirection) {
      ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
    }

    return (
      <StyledTableColumn
        aria-sort={isSortable ? (ariaSort as React.AriaAttributes['aria-sort']) : undefined}
        className="manifestui-table-column"
        data-sortable={isSortable ? '' : null}
        data-align={align}
        data-active={isActive ? '' : null}
        data-hover={isHovered ? '' : null}
        ref={ref}
        {...other}
      >
        {!isSortable && children}
        {isSortable && (
          <StyledTableSortButton
            className="manifestui-table-sort"
            data-align={align}
            onClick={onClick}
            onMouseEnter={chainCallbacks(() => setIsHovered(true), onMouseEnter)}
            onMouseLeave={chainCallbacks(() => setIsHovered(false), onMouseLeave)}
            type="button"
          >
            {children}
            <StyledTableSortIcon
              className="manifestui-table-sort__icon"
              data-sort-direction={sortDirection}
            />
          </StyledTableSortButton>
        )}
      </StyledTableColumn>
    );
  },
);

TableColumn.displayName = 'TableColumn';
