import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

import { Icon } from '../Icon';
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

  [`& ${Icon}`]: {
    mr: '$2',
  },

  variants: {
    status: {
      neutral: {
        backgroundColor: '$neutral100',
        color: '$neutral500',
      },
      info: {
        backgroundColor: '$blue100',
        color: '$blue500',
      },
      success: {
        backgroundColor: '$green100',
        color: '$green500',
      },
      warning: {
        backgroundColor: '$orange100',
        color: '$orange500',
      },
      danger: {
        backgroundColor: '$red100',
        color: '$red500',
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
