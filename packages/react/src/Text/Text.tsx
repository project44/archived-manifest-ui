import { styled, ComponentProps, VariantProps } from '../stitches.config';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  fontFamily: '$body',

  variants: {
    size: {
      lg: {
        fontSize: '$lg',
        fontWeight: '$medium',
        lineHeight: '28px',
        letterSpacing: '$normal',
      },
      md: {
        fontSize: '$md',
        fontWeight: '$medium',
        lineHeight: '24px',
        letterSpacing: '$normal',
      },
      sm: {
        fontSize: '$sm',
        fontWeight: '$medium',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
      xs: {
        fontSize: '$xs',
        fontWeight: '$medium',
        lineHeight: '18px',
        letterSpacing: '$wide',
      },
      xxs: {
        fontSize: '$xxs',
        fontWeight: '$medium',
        lineHeight: '16px',
        letterSpacing: '$wide',
      },
    },
  },
});
