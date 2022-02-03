import * as React from 'react';
import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';

export interface OverlineOptions {
  /**
   * The variant of the Overline element. Use as the element type as well.
   *
   * @default 'overline1'
   */
  variant?: 'overline1' | 'overline2' | 'overline3';
}

export type OverlineProps = ComponentProps<typeof StyledOverline>;

export const StyledOverline = styled('span', {
  label: 'Overline',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && prop !== 'isBold',
  themeKey: 'overline',
})<OverlineOptions>(({ variant }) => ({
  fontFamily: 'body',
  fontWeight: 'medium',
  margin: 0,
  textTransform: 'uppercase',

  ...(variant === 'overline1' && {
    fontSize: 'small',
    letterSpacing: 'wider',
    lineHeight: 'medium',
  }),

  ...(variant === 'overline2' && {
    fontSize: 'x-small',
    letterSpacing: 'wide',
    lineHeight: 'small',
  }),

  ...(variant === 'overline3' && {
    fontSize: 'xx-small',
    letterSpacing: 'wide',
    lineHeight: 'small',
  }),
}));

export const Overline = React.forwardRef<HTMLParagraphElement, OverlineProps>(
  (props: OverlineProps, ref) => {
    const { variant = 'overline1', ...other } = props;

    return <StyledOverline ref={ref} variant={variant} {...other} />;
  },
);

Overline.displayName = 'Overline';
