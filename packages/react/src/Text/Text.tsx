import { styled, ComponentProps, VariantProps } from '../stitches.config';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  // Reset
  lineHeight: '1',
  margin: '0',
  fontWeight: '$normal',
  fontVariantNumeric: 'tabular-nums',

  variants: {
    fontSize: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
      },
      '6': {
        fontSize: '$6',
      },
      '7': {
        fontSize: '$7',
      },
      '8': {
        fontSize: '$8',
      },
      '9': {
        fontSize: '$9',
      },
    },
    size: {
      small: {
        fontSize: '$3',
        letterSpacing: '$normal',
        lineHeight: 1,
      },
      medium: {
        fontSize: '$3',
        letterSpacing: '$normal',
        lineHeight: 1,
      },
      large: {
        fontSize: '$3',
        letterSpacing: '$normal',
        lineHeight: 1,
      },
    },
    variant: {
      contrast: {
        color: '$hiContrast',
      },
      secondary: {
        color: '$neutral500',
      },
    },
    isTruncated: {
      true: {},
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'contrast',
  },
});
