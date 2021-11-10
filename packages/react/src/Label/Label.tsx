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

  variants: {
    size: {
      large: {
        fontSize: '$5',
        fontWeight: '$medium',
        lineHeight: '$space$6',
        letterSpacing: '$normal',
      },
      medium: {
        fontSize: '$4',
        fontWeight: '$medium',
        lineHeight: '$space$6',
        letterSpacing: '$normal',
      },
      small: {
        fontSize: '$3',
        fontWeight: '$medium',
        lineHeight: '$space$5',
        letterSpacing: '$wide',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
