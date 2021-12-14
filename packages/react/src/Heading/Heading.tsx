import React from 'react';

import { VariantProps, CSS } from '../stitches.config';
import { Text } from '../Text';

const DEFAULT_TAG = 'h2';

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>;
type HeadingSizeVariants = '1' | '2' | '3' | '4' | '5';
export type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>;
export type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & {
    css?: CSS;
    as?: keyof JSX.IntrinsicElements | React.ElementType;
  };

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, ref) => {
  const { size = 3, css, ...textProps } = props;
  const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '4', '@bp2': '5' },
    2: { '@initial': '5', '@bp2': '6' },
    3: { '@initial': '6', '@bp2': '7' },
    4: { '@initial': '7', '@bp2': '8' },
    5: { '@initial': '8', '@bp2': '9' },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={ref}
      size={textSize[size]}
      css={{ fontWeight: '$7', lineHeight: '$1', ...css }}
    />
  );
});
