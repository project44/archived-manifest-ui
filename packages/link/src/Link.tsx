import * as React from 'react';
import { ComponentProps, styled } from '@manifest-ui/styled';

export interface LinkOptions {
  /**
   * The link variant.
   *
   * @default 'link1'
   */
  variant?: 'link1' | 'link2';
}

export type LinkProps = ComponentProps<typeof LinkRoot>;

const LinkRoot = styled('a', {
  label: 'Link',
  themeKey: 'link',
})<LinkOptions>(({ variant }) => ({
  alignItems: 'center',
  color: 'primary.500',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'body',
  fontWeight: 'medium',
  letterSpacing: 'normal',
  textDecoration: 'none',
  width: 'fitContent',

  '&:hover': {
    backgroundClip: 'text',
    backgroundImage: 'linear-gradient(0deg, rgba(10, 21, 33, 0.2), rgba(10, 21, 33, 0.2))',
  },

  ...(variant === 'link1' && {
    fontSize: 'medium',
    lineHeight: 'large',
  }),

  ...(variant === 'link2' && {
    fontSize: 'small',
    lineHeight: 'medium',
  }),
}));

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>((props: LinkProps, ref) => {
  const { children, variant = 'link1', ...other } = props;

  return (
    <LinkRoot ref={ref} variant={variant} {...other}>
      {children}
    </LinkRoot>
  );
});

Link.displayName = 'Link';
