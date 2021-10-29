import { styled, ComponentProps } from '../stitches.config';

export type BoxProps = ComponentProps<typeof Box>;

export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
});
