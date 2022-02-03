import * as React from 'react';
import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';

export interface BodyOptions {
  /**
   * Whether the Body will rendered with a bold font weight.
   *
   * @default false
   */
  isBold?: boolean;
  /**
   * The variant of the Body element. Use as the element type as well.
   *
   * @default 'body1'
   */
  variant?: 'body1' | 'body2';
}

export type BodyProps = ComponentProps<typeof StyledBody>;

export const StyledBody = styled('p', {
  label: 'Body',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && prop !== 'isBold',
  themeKey: 'body',
})<BodyOptions>(({ isBold, variant }) => ({
  fontFamily: 'body',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  margin: 0,

  ...(isBold && { fontWeight: 'bold' }),

  ...(variant === 'body1' && {
    fontSize: 'medium',
    lineHeight: 'large',
  }),

  ...(variant === 'body2' && {
    fontSize: 'small',
    lineHeight: 'medium',
  }),
}));

export const Body = React.forwardRef<HTMLParagraphElement, BodyProps>((props: BodyProps, ref) => {
  const { variant = 'body1', ...other } = props;

  return <StyledBody ref={ref} variant={variant} {...other} />;
});

Body.displayName = 'Body';
