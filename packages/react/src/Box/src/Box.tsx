import { styled, ComponentProps } from '@manifest-ui/stitches';

export type BoxProps = ComponentProps<typeof Box>;

export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
});
