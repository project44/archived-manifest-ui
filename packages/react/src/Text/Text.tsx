import { styled, ComponentProps, VariantProps } from '../stitches.config';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  fontFamily: '$body',

  variants: {
    variant: {
      headingLg: {
        fontSize: '$11',
        fontWeight: '$bold',
        lineHeight: '$normal',
        letterSpacing: '$tighter',
      },
      headingMd: {
        fontSize: '$10',
        fontWeight: '$bold',
        lineHeight: '46px',
        letterSpacing: '$tighter',
      },
      headingSm: {
        fontSize: '$9',
        fontWeight: '$bold',
        lineHeight: '36px',
        letterSpacing: '$tighter',
      },
      titleLg: {
        fontSize: '$8',
        fontWeight: '$bold',
        lineHeight: '30px',
        letterSpacing: 'tight',
      },
      titleMd: {
        fontSize: '$7',
        fontWeight: '$bold',
        lineHeight: '24px',
        letterSpacing: 'wider',
        textTransform: 'uppercase',
      },
      titleSm: {
        fontSize: '$6',
        fontWeight: '$bold',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
      bodyLg: {
        fontSize: '$5',
        fontWeight: '$medium',
        lineHeight: '28px',
        letterSpacing: 'normal',
      },
      bodyMd: {
        fontSize: '$4',
        fontWeight: '$medium',
        lineHeight: '24px',
        letterSpacing: 'normal',
      },
      bodySm: {
        fontSize: '$3',
        fontWeight: '$medium',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
      captionMd: {
        fontSize: '$2',
        fontWeight: '$medium',
        lineHeight: '18px',
        letterSpacing: '$wide',
      },
      captionSm: {
        fontSize: '$1',
        fontWeight: '$medium',
        lineHeight: '16px',
        letterSpacing: '$wide',
      },
    },
  },
});
