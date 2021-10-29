import { styled, ComponentProps, VariantProps } from '@manifest-ui/stitches';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  variants: {
    tone: {
      success: {
        color: '$green500',
      },
      critical: {
        color: '$orange500',
      },
      danger: {
        color: '$red500',
      },
      info: {
        color: '$blue500',
      },
    },
    variant: {
      h1: {
        fontSize: '$11',
        fontWeight: '$bold',
        lineHeight: '$normal',
        letterSpacing: '$tighter',
      },
      h2: {
        fontSize: '$10',
        fontWeight: '$bold',
        lineHeight: '46px',
        letterSpacing: '$tighter',
      },
      h3: {
        fontSize: '$9',
        fontWeight: '$bold',
        lineHeight: '36px',
        letterSpacing: '$tighter',
      },
      h4: {
        fontSize: '$8',
        fontWeight: '$bold',
        lineHeight: '30px',
        letterSpacing: 'tight',
      },
      h5: {
        fontSize: '$7',
        fontWeight: '$bold',
        lineHeight: '24px',
        letterSpacing: 'wider',
        textTransform: 'uppercase',
      },
      h6: {
        fontSize: '$6',
        fontWeight: '$bold',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
      body1: {
        fontSize: '$5',
        fontWeight: '$medium',
        lineHeight: '28px',
        letterSpacing: 'normal',
      },
      body2: {
        fontSize: '$4',
        fontWeight: '$medium',
        lineHeight: '24px',
        letterSpacing: 'normal',
      },
      footnote: {
        fontSize: '$3',
        fontWeight: '$medium',
        lineHeight: '22px',
        letterSpacing: '$wide',
      },
      caption1: {
        fontSize: '$2',
        fontWeight: '$medium',
        lineHeight: '18px',
        letterSpacing: '$wide',
      },
      caption2: {
        fontSize: '$1',
        fontWeight: '$medium',
        lineHeight: '16px',
        letterSpacing: '$wide',
      },
    },
  },
});
