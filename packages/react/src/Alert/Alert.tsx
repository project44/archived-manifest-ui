import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type AlertProps = ComponentProps<typeof Alert>;
export type AlertVariants = VariantProps<typeof Alert>;

export const Alert = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  px: '$3',
  fontFamily: '$body',
  borderRadius: '$small',

  variants: {
    status: {
      neutral: {
        backgroundColor: '$neutral10',
        color: '$neutral50',
      },
      info: {
        backgroundColor: '$blue10',
        color: '$blue50',
      },
      success: {
        backgroundColor: '$green10',
        color: '$green50',
      },
      warning: {
        backgroundColor: '$orange10',
        color: '$orange50',
      },
      danger: {
        backgroundColor: '$red10',
        color: '$red50',
      },
    },
    size: {
      small: {
        py: '$2',
      },
      medium: {
        py: '$3',
      },
      large: {
        py: '$4',
      },
    },
    variant: {
      subtle: {},
      solid: {},
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'medium',
  },
});
