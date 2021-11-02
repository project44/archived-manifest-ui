import { styled, ComponentProps, VariantProps } from '../stitches.config';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  fontWeight: '$medium',
  fontVariantNumeric: 'tabular-nums',
  display: 'block',
  margin: '0',

  // Custom
  fontFamily: '$body',
  color: '$hiContrast',

  variants: {
    variant: {
      heading1: {
        fontSize: '$4xl',
        fontWeight: '$bold',
        lineHeight: '$base',
        letterSpacing: '$tighter',
      },
      heading2: {
        fontSize: '$3xl',
        fontWeight: '$bold',
        lineHeight: '$base',
        letterSpacing: '$tighter',
      },
      heading3: {
        fontSize: '$2xl',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$tight',
      },
      title1: {
        fontSize: 'xl',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$wide',
      },
      title2: {
        fontSize: '$md',
        fontWeight: '$bold',
        lineHeight: '$short',
        letterSpacing: '$wider',
        textTransform: 'uppercase',
      },
      title3: {
        fontSize: '$sm',
        fontWeight: '$bold',
        lineHeight: '$tall',
        letterSpacing: '$wide',
      },
      body1: {
        fontSize: '$lg',
        fontWeight: '$medium',
        lineHeight: '28px',
        letterSpacing: '$normal',
      },
      body2: {
        fontSize: '$md',
        fontWeight: '$medium',
        lineHeight: '24px',
        letterSpacing: '$normal',
      },
      body3: {
        fontSize: '$sm',
        fontWeight: '$medium',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
      caption1: {
        fontSize: '$xs',
        fontWeight: '$medium',
        letterSpacing: '$wide',
      },
      caption2: {
        fontSize: '$xxs',
        fontWeight: '$medium',
        lineHeight: '16px',
        letterSpacing: '$wide',
      },
    },
  },
});
