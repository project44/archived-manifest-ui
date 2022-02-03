import * as React from 'react';
import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';

export interface CaptionOptions {
  /**
   * Whether the Caption will rendered with a bold font weight.
   *
   * @default false
   */
  isBold?: boolean;
  /**
   * The variant of the Caption element. Use as the element type as well.
   *
   * @default 'caption1'
   */
  variant?: 'caption1' | 'caption2';
}

export type CaptionProps = ComponentProps<typeof StyledCaption>;

export const StyledCaption = styled('span', {
  label: 'Caption',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && prop !== 'isBold',
  themeKey: 'caption',
})<CaptionOptions>(({ isBold, variant }) => ({
  fontFamily: 'body',
  fontWeight: 'medium',
  letterSpacing: 'normal',
  margin: 0,

  ...(isBold && { fontWeight: 'bold' }),

  ...(variant === 'caption1' && {
    fontSize: 'medium',
    lineHeight: 'large',
  }),

  ...(variant === 'caption2' && {
    fontSize: 'small',
    lineHeight: 'medium',
  }),
}));

export const Caption = React.forwardRef<HTMLParagraphElement, CaptionProps>(
  (props: CaptionProps, ref) => {
    const { variant = 'caption1', ...other } = props;

    return <StyledCaption ref={ref} variant={variant} {...other} />;
  },
);

Caption.displayName = 'Caption';
