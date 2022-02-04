import { ComponentProps, styled } from '@manifest-ui/styled';

export type TableRowProps = ComponentProps<typeof TableRow>;

export const TableRow = styled('tr', {
  label: 'Table',
  slot: 'tr',
  themeKey: 'table',
})({
  borderColor: 'inherit',
  display: 'table-row',
  verticalAlign: 'middle',
});

TableRow.displayName = 'TableRow';
