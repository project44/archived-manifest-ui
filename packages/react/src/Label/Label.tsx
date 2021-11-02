import React from 'react';
import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

import { Text } from '../Text';

export type LabelProps = LabelPrimitive.LabelProps &
  ComponentProps<typeof StyledLabel>;
export type LabelVariants = VariantProps<typeof StyledLabel>;

const StyledLabel = styled(LabelPrimitive.Root, {
  variants: {
    variant: {
      body1: {},
      body2: {},
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
});

export const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  (props, forwardedRef) => (
    <Text as={StyledLabel} ref={forwardedRef} {...props} />
  ),
);
