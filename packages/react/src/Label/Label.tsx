import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

import { Text } from '../Text';

export type LabelProps = LabelPrimitive.LabelProps &
  ComponentProps<typeof Label>;
export type LabelVariants = VariantProps<typeof Label>;

export const Label = styled(LabelPrimitive.Root, Text, {
  // Reset
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',

  // Custom
  fontWeight: '$base',
  letterSpacing: '$base',
  lineHeight: '$base',

  variants: {
    size: {
      large: {
        fontSize: '$5',
      },
      medium: {
        fontSize: '$4',
      },
      small: {
        fontSize: '$3',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
