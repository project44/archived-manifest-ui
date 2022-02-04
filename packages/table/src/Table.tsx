import { ComponentProps, styled } from '@manifest-ui/styled';

export type TableProps = ComponentProps<typeof Table>;

export const Table = styled('table', {
  label: 'Table',
  themeKey: 'table',
})({
  borderCollapse: 'collapse',
  borderSpacing: 0,
  display: 'table',
  width: 'inherit',
});

Table.displayName = 'Table';
