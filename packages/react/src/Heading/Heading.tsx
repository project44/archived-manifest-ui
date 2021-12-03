import React from 'react';

import { VariantProps, CSS } from '../stitches.config';
import { Text } from '../Text';

const DEFAULT_TAG = 'h2';

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'fontSize'>;
type HeadingSizeVariants = 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
export type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'fontSize' | 'fontWeight' | 'status' | 'variant'
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
  const { size = 'large', css, ...textProps } = props;
  const textSize: Record<HeadingSizeVariants, TextSizeVariants['fontSize']> = {
    small: { '@initial': '3', '@bp2': '4' },
    medium: { '@initial': '4', '@bp2': '5' },
    large: { '@initial': '6', '@bp2': '7' },
    xlarge: { '@initial': '7', '@bp2': '8' },
    xxlarge: { '@initial': '8', '@bp2': '9' },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={ref}
      fontWeight="bold"
      fontSize={textSize[size]}
      css={{ lineHeight: '$short', ...css }}
    />
  );
});
