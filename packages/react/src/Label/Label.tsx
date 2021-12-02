import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

import { Text } from '../Text';

export type LabelProps = LabelPrimitive.LabelProps &
  ComponentProps<typeof Label>;
export type LabelVariants = VariantProps<typeof Label>;

export const Label = styled(LabelPrimitive.Root, Text, {
  display: 'inline-block',
  cursor: 'default',
  fontWeight: '$medium',
  lineHeight: '$base',

  defaultVariants: {
    size: 'medium',
  },
});
