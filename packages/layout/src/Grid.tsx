import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';
import { countToColumns, widthToColumns } from './utils/grid';
import { ResponsiveValue, SystemProps } from '@manifest-ui/styled-system';

const props = new Set(['columns', 'columnWidth']);

export interface GridOptions {
  /**
   * The number of columns
   */
  columns?: ResponsiveValue<number | string>;
  /**
   * The width of the columns.
   */
  columnWidth?: SystemProps['width'];
}

export type GridProps = ComponentProps<typeof Grid>;

export const Grid = styled('div', {
  label: 'Grid',
  themeKey: 'grid',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && !props.has(prop),
})<GridOptions>(({ columns, columnWidth }) => ({
  boxSizing: 'border-box',
  display: 'grid',
  gap: 2,
  gridTemplateColumns: columnWidth ? widthToColumns(columnWidth) : countToColumns(columns),
}));

Grid.displayName = 'Grid';
