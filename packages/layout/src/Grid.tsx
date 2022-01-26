import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';
import { countToColumns, widthToColumns } from './utils/grid';
import { ResponsiveValue, StyleProps } from '@manifest-ui/styled-system';

const props = new Set(['columns', 'columnWidth']);

export interface GridOptions {
  /**
   * The number of columns
   */
  columns?: ResponsiveValue<number | string>;
  /**
   * The width of the columns.
   */
  columnWidth?: StyleProps['width'];
}

export interface GridProps extends ComponentProps<typeof Grid>, GridOptions {}

export const Grid = styled('div', {
  label: 'Grid',
  themeKey: 'grid',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
})(
  ({
    columns,
    columnWidth,
  }: {
    columns: ResponsiveValue<number | string>;
    columnWidth: StyleProps['width'];
  }) => ({
    boxSizing: 'border-box',
    display: 'grid',
    gap: 2,
    gridTemplateColumns: columnWidth ? widthToColumns(columnWidth) : countToColumns(columns),
  }),
);

Grid.displayName = 'Grid';
