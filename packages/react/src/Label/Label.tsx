import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

import { Text } from '../Text';

export type LabelProps = LabelPrimitive.LabelProps &
  ComponentProps<typeof Label>;
export type LabelVariants = VariantProps<typeof Label>;

export const Label = styled(LabelPrimitive.Root, Text, {
  display: 'inline-block',
  verticalAlign: 'middle',
  cursor: 'default',
  fontWeight: '$5',

  variants: {
    size: {
      '1': { fontSize: '$3' },
      '2': { fontSize: '$4' },
    },
  },
  defaultVariants: {
    size: '2',
  },
});
