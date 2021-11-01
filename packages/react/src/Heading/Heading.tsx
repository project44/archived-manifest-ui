import { styled } from '../stitches.config';
import type { ComponentProps, VariantProps } from '../stitches.config';

export type HeadingProps = ComponentProps<typeof Heading>;
export type HeadingVariants = VariantProps<typeof Heading>;

export const Heading = styled('h2', {
  fontFamily: '$heading',

  variants: {
    level: {
      1: {
        fontSize: '$4xl',
        fontWeight: '$bold',
        lineHeight: '$base',
        letterSpacing: '$tighter',
      },
      2: {
        fontSize: '$3xl',
        fontWeight: '$bold',
        lineHeight: '$base',
        letterSpacing: '$tighter',
      },
      3: {
        fontSize: '$2xl',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$tight',
      },
      4: {
        fontSize: 'xl',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$wide',
      },
      5: {
        fontSize: '$md',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$wider',
        textTransform: 'uppercase',
      },
      6: {
        fontSize: '$sm',
        fontWeight: '$bold',
        lineHeight: '$tall',
        letterSpacing: '$wide',
      },
    },
  },
});
