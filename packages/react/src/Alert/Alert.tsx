import React from 'react';

import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type AlertProps = ComponentProps<typeof Alert>;
export type AlertVariants = VariantProps<typeof Alert>;

export const Alert = styled('div', {
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  px: '$3',
  overflow: 'hidden',
  borderRadius: '$small',
  fontFamily: '$body',

  variants: {
    status: {
      neutral: {
        $$subtle: '$colors$neutral10',
        $$solid: '$colors$neutral50',
      },
      info: {
        $$subtle: '$colors$blue10',
        $$solid: '$colors$blue50',
      },
      success: {
        $$subtle: '$colors$green10',
        $$solid: '$colors$green50',
      },
      warning: {
        $$subtle: '$colors$orange10',
        $$solid: '$colors$orange50',
      },
      danger: {
        $$subtle: '$colors$red10',
        $$solid: '$colors$red50',
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
