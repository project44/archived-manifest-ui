import React from 'react';
import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

import { mapToVariant } from '../utils';
import { Text } from '../Text';
import type { TextProps } from '../Text';

export type LabelProps = LabelPrimitive.LabelProps &
  ComponentProps<typeof StyledLabel>;
export type LabelVariants = VariantProps<typeof StyledLabel>;

const StyledLabel = styled(LabelPrimitive.Root, {
  variants: {
    size: {
      large: {},
      medium: {},
      small: {},
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const variantMap = {
  large: 'labelLarge',
  medium: 'labelMedium',
  small: 'labelSmall',
};

export const Label = React.forwardRef<HTMLSpanElement, LabelProps>(
  ({ size = 'medium', ...props }, forwardedRef) => {
    const variant = mapToVariant<typeof size, TextProps['variant']>(
      variantMap,
      size,
      'labelMedium',
    );
    return (
      <Text as={StyledLabel} ref={forwardedRef} variant={variant} {...props} />
    );
  },
);
