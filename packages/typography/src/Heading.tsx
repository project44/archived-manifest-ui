import * as React from 'react';
import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';

export interface HeadingOptions {
  /**
   * Whether the heading will rendered with a bold font weight.
   *
   * @default false
   */
  isBold?: boolean;
  /**
   * The variant of the heading element. Use as the element type as well.
   *
   * @default 'h1'
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export type HeadingProps = ComponentProps<typeof StyledHeading>;

export const StyledHeading = styled('span', {
  label: 'Heading',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && prop !== 'isBold',
  themeKey: 'heading',
})<HeadingOptions>(({ isBold, variant }) => ({
  fontFamily: 'body',
  fontWeight: 'normal',
  letterSpacing: 'tight',
  margin: 0,

  ...(isBold && { fontWeight: 'bold' }),

  ...(variant === 'h1' && {
    fontSize: 'xxxx-large',
    lineHeight: 'xx-large',
  }),

  ...(variant === 'h2' && {
    fontSize: 'xxx-large',
    lineHeight: 'xx-large',
  }),

  ...(variant === 'h3' && {
    fontSize: 'xx-large',
    lineHeight: 'x-large',
  }),

  ...(variant === 'h4' && {
    fontSize: 'x-large',
    lineHeight: 'x-large',
  }),

  ...(variant === 'h5' && {
    fontSize: 'large',
    lineHeight: 'large',
  }),

  ...(variant === 'h6' && {
    fontSize: 'medium',
    lineHeight: 'large',
  }),
}));

export const Heading = React.forwardRef<HTMLSpanElement, HeadingProps>(
  (props: HeadingProps, ref) => {
    const { variant = 'h1', ...other } = props;

    return <StyledHeading as={variant} ref={ref} variant={variant} {...other} />;
  },
);

Heading.displayName = 'Heading';
