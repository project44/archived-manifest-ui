import { styled } from '../stitches.config';
import type { ComponentProps } from '../stitches.config';

export type ContainerProps = ComponentProps<typeof Container>;

export const Container = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
    size: {
      '1': { maxWidth: '$1' },
      '2': { maxWidth: '$2' },
      '3': { maxWidth: '$3' },
      '4': { maxWidth: 'none' },
    },
  },
  defaultVariants: {
    size: '4',
  },
});
