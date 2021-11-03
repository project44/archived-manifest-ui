import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';
import * as LabelPrimitive from '@radix-ui/react-label';

export type LabelProps = LabelPrimitive.LabelProps &
  ComponentProps<typeof Label>;
export type LabelVariants = VariantProps<typeof Label>;

export const Label = styled(LabelPrimitive.Root, {
  // Reset
  display: 'block',
  margin: '0',

  // Custom
  color: '$hiContrast',
  fontFamily: '$body',

  variants: {
    size: {
      standard: {
        fontSize: '$4',
        fontWeight: '$medium',
        lineHeight: '24px',
        letterSpacing: '$normal',
      },
      small: {
        fontSize: '$3',
        fontWeight: '$medium',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
    },
  },
  defaultVariants: {
    size: 'standard',
  },
});
