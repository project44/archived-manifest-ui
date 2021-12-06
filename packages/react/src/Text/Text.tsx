import { styled, ComponentProps, VariantProps } from '../stitches.config';

export type TextProps = ComponentProps<typeof Text>;
export type TextVariants = VariantProps<typeof Text>;

export const Text = styled('span', {
  display: 'block',
  m: '0',
  fontWeight: '$4',
  lineHeight: '1',

  variants: {
    isTruncated: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    size: {
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
    variant: {
      contrast: { color: '$hiContrast' },
      gray: { color: '$gray8' },
      red: { color: '$red8' },
      orange: { color: '$orange8' },
      yellow: { color: '$yellow8' },
      green: { color: '$green8' },
      teal: { color: '$teal8' },
      blue: { color: '$blue8' },
      purple: { color: '$purple8' },
      pink: { color: '$pink8' },
    },
  },
  defaultVariants: {
    size: '4',
    variant: 'contrast',
  },
});
