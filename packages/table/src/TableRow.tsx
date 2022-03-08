import * as React from 'react';
import { chainCallbacks } from '@manifest-ui/utils';
import { ComponentProps } from '@manifest-ui/styled';
import { StyledTableRow } from './Table.styles';
import { useTableContext } from './context';

export type TableRowProps = ComponentProps<typeof StyledTableRow>;

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  (props: TableRowProps, ref) => {
    const { onMouseEnter: onMouseEnterProp, onMouseLeave: onMouseLeaveProp, ...other } = props;

    const { onMouseEnter, onMouseLeave, showHover } = useTableContext();

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = React.useCallback(() => {
      if (!showHover) return;

      setIsHovered(true);
    }, [setIsHovered, showHover]);

    return (
      <StyledTableRow
        data-hovered={isHovered ? '' : undefined}
        className="manifestui-table-row"
        onMouseEnter={chainCallbacks(handleMouseEnter, onMouseEnter, onMouseEnterProp)}
        onMouseLeave={chainCallbacks(() => setIsHovered(false), onMouseLeave, onMouseLeaveProp)}
        ref={ref}
        {...other}
      />
    );
  },
);

TableRow.displayName = 'TableRow';
