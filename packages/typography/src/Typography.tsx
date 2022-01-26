import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';

export interface TypographyOptions {
  /**
   * The size of the typography element.
   *
   * @default 'medium'
   */
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
  /**
   * The variant of the typography element.
   *
   * @default 'body2'
   */
  variants?:
    | 'heading1'
    | 'heading2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'link'
    | 'caption1'
    | 'caption2'
    | 'overline'
    | 'footnote1'
    | 'footnote2';
}

export type TypographyProps = ComponentProps<typeof StyledTypography>;

export const StyledTypography = styled('span', {
  label: 'Typography',
  themeKey: 'typography',
})<TypographyOptions>(({ size, variant }) => ({
  margin: 0,

  ...((variant === 'heading1' || variant === 'heading2') && {
    fontFamily: 'body',
    letterSpacing: 'tight',

    ...(size === 'xx-large' && {
      fontSize: 1,
      lineHeight: 1,
    }),

    ...(size === 'x-large' && {
      fontSize: 2,
      lineHeight: 1,
    }),

    ...(size === 'large' && {
      fontSize: 3,
      lineHeight: 2,
    }),

    ...(size === 'medium' && {
      fontSize: 4,
      lineHeight: 2,
    }),

    ...(size === 'small' && {
      fontSize: 5,
      lineHeight: 3,
    }),

    ...(size === 'x-small' && {
      fontSize: 6,
      lineHeight: 3,
    }),
  }),

  ...((variant === 'heading1' ||
    variant === 'body1' ||
    variant === 'caption1' ||
    variant === 'footnote1') && {
    fontWeight: 'bold',
  }),

  ...((variant === 'body1' || variant === 'body2') && {
    fontFamily: 'body',
    letterSpacing: 'normal',

    ...(size === 'medium' && {
      fontSize: 6,
      lineHeight: 3,
    }),

    ...(size === 'small' && {
      fontSize: 7,
      lineHeight: 4,
    }),
  }),

  ...(variant === 'button' && {
    fontFamily: 'body',
    fontWeight: 'semibold',
    letterSpacing: 'normal',

    ...(size === 'medium' && {
      fontSize: 6,
      lineHeight: 3,
    }),

    ...(size === 'small' && {
      fontSize: 7,
      lineHeight: 4,
    }),
  }),

  ...(variant === 'link' && {
    fontFamily: 'body',
    letterSpacing: 'normal',

    ...(size === 'medium' && {
      fontSize: 6,
      lineHeight: 3,
    }),

    ...(size === 'small' && {
      fontSize: 7,
      lineHeight: 4,
    }),
  }),

  ...((variant === 'caption1' || variant === 'caption2') && {
    fontFamily: 'body',
    letterSpacing: 'normal',

    ...(size === 'medium' && {
      fontSize: 6,
      lineHeight: 3,
    }),

    ...(size === 'small' && {
      fontSize: 7,
      lineHeight: 4,
    }),
  }),

  ...(variant === 'overline' && {
    fontFamily: 'body',
    letterSpacing: 'wide',

    ...(size === 'large' && {
      fontSize: 7,
      lineHeight: 4,
    }),

    ...(size === 'medium' && {
      fontSize: 8,
      lineHeight: 5,
    }),

    ...(size === 'small' && {
      fontSize: 9,
      lineHeight: 5,
    }),
  }),

  ...((variant === 'footnote1' || variant === 'footnote2') && {
    fontFamily: 'body',
    letterSpacing: 'normal',

    ...(size === 'medium' && {
      fontSize: 8,
      lineHeight: 5,
    }),

    ...(size === 'small' && {
      fontSize: 9,
      lineHeight: 5,
    }),
  }),
}));

export const Typography = React.forwardRef<HTMLSpanElement, TypographyProps>(
  (props: TypographyProps, ref) => {
    const { size = 'medium', variant = 'body2', ...other } = props;

    return <StyledTypography ref={ref} size={size} variant={variant} {...other} />;
  },
);

Typography.displayName = 'Typography';
