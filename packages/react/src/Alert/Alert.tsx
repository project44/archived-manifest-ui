import React from 'react';

import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type AlertProps = ComponentProps<typeof Alert>;
export type AlertVariants = VariantProps<typeof Alert>;

export const Alert = styled('div', {
  $$subtle: '$colors$neutral1',
  $$solid: '$colors$neutral5',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  px: '$3',
  overflow: 'hidden',
  borderRadius: '$small',
  fontFamily: '$body',

  variants: {
    status: {
      info: {
        $$subtle: '$colors$blue1',
        $$solid: '$colors$blue5',
      },
      success: {
        $$subtle: '$colors$green1',
        $$solid: '$colors$green5',
      },
      warning: {
        $$subtle: '$colors$orange1',
        $$solid: '$colors$orange5',
      },
      danger: {
        $$subtle: '$colors$red1',
        $$solid: '$colors$red5',
      },
    },
    size: {
      medium: { py: '$3' },
    },
    variant: {
      subtle: { bg: '$$subtle' },
      solid: { bg: '$$solid', color: '$loContrast' },
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'subtle',
  },
});

export const AlertIcon = () => {
  return (
    <span role="img" aria-label="alert icon">
      👋
    </span>
  );
};

export const AlertTitle = styled('div', {
  fontWeight: '$bold',
  lineHeight: '$body',
});

export const AlertDescription = styled('div', {
  display: 'inline',
  lineHeight: '$body',
});
