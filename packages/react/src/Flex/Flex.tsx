import { ComponentProps } from '../types';
import { styled } from '../styles';
import { VariantProps } from '@stitches/react';

export type FlexProps = ComponentProps<typeof Flex> & VariantProps<typeof Flex>;

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    align: {
      baseline: { alignItems: 'baseline' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      start: { alignItems: 'flex-start' },
    },
    direction: {
      horizontal: { flexDirection: 'row' },
      vertical: { flexDirection: 'column' },
    },
    justify: {
      between: { justifyContent: 'space-between' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      start: { justifyContent: 'flex-start' },
    },
    wrap: {
      false: {},
      true: { flexWrap: 'wrap' },
    },
  },
});

Flex.displayName = 'ManifestFlex';
