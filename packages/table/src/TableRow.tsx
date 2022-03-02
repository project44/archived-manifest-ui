import * as React from 'react';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTableRow } from './Table.styles';
import { useMergedCallbacks } from '@manifest-ui/hooks';
import { useTableContext } from './context';

export type TableRowProps = ComponentProps<typeof StyledTableRow>;

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (props: TableRowProps, ref) => {
    const { onMouseEnter: onMouseEnterProp, onMouseLeave: onMouseLeaveProp, ...other } = props;

    const { onMouseEnter, onMouseLeave, showHover } = useTableContext();

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = React.useCallback(
      (event: React.MouseEvent<HTMLTableRowElement>) => {
        if (!showHover) return;

        setIsHovered(true);
      },
      [setIsHovered, showHover],
    );

    const handleMouseLeave = React.useCallback(
      (event: React.MouseEvent<HTMLTableRowElement>) => {
        setIsHovered(false);
      },
      [setIsHovered],
    );

    return (
      <StyledTableRow
        data-hovered={isHovered ? '' : undefined}
        className="manifestui-table-row"
        onMouseEnter={useMergedCallbacks(handleMouseEnter, onMouseEnter, onMouseEnterProp)}
        onMouseLeave={useMergedCallbacks(handleMouseLeave, onMouseLeave, onMouseLeaveProp)}
        ref={ref}
        {...other}
      />
    );
  },
);

TableRow.displayName = 'TableRow';
