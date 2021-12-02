import { styled, ComponentProps, VariantProps } from '../stitches.config';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  display: 'block',
  m: '0',
  fontWeight: '$normal',
  lineHeight: '$base',

  variants: {
    fontSize: {
      '1': { fontSize: '$1' },
      '2': { fontSize: '$2' },
      '3': { fontSize: '$3' },
      '4': { fontSize: '$4' },
      '5': { fontSize: '$5' },
      '6': { fontSize: '$6' },
      '7': { fontSize: '$7' },
      '8': { fontSize: '$8' },
      '9': { fontSize: '$9' },
    },
    isTruncated: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    size: {
      small: { fontSize: '$3' },
      medium: { fontSize: '$4' },
      large: { fontSize: '$5' },
    },
    status: {
      info: { color: '$blue5' },
      success: { color: '$green5' },
      warning: { color: '$orange5' },
      danger: { color: '$red5' },
    },
    variant: {
      contrast: { color: '$hiContrast' },
      secondary: { color: '$neutral5' },
    },
    weight: {
      normal: { fontWeight: '$normal' },
      medium: { fontWeight: '$medium' },
      semibold: { fontWeight: '$semibold' },
      bold: { fontWeight: '$bold' },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
});
