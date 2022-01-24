import { ComponentProps, styled } from '@manifest-ui/styled';

export type BoxProps = ComponentProps<typeof Box>;

export const Box = styled('div', {
  label: 'Box',
  themeKey: 'box',
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
});

Box.displayName = 'Box';
