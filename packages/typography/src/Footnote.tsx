import * as React from 'react';
import { ComponentProps, shouldForwardProp, styled } from '@manifest-ui/styled';

export interface FootnoteOptions {
  /**
   * Whether the Footnote will rendered with a bold font weight.
   *
   * @default false
   */
  isBold?: boolean;
  /**
   * The variant of the Footnote element. Use as the element type as well.
   *
   * @default 'footnote1'
   */
  variant?: 'footnote1' | 'footnote2';
}

export type FootnoteProps = ComponentProps<typeof StyledFootnote>;

export const StyledFootnote = styled('span', {
  label: 'Footnote',
  shouldForwardProp: (prop: string) => shouldForwardProp(prop) && prop !== 'isBold',
  themeKey: 'Footnote',
})<FootnoteOptions>(({ isBold, variant }) => ({
  fontFamily: 'body',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  margin: 0,

  ...(isBold && { fontWeight: 'bold' }),

  ...(variant === 'footnote1' && {
    fontSize: 'x-small',
    lineHeight: 'small',
  }),

  ...(variant === 'footnote2' && {
    fontSize: 'xx-small',
    lineHeight: 'small',
  }),
}));

export const Footnote = React.forwardRef<HTMLParagraphElement, FootnoteProps>(
  (props: FootnoteProps, ref) => {
    const { variant = 'footnote1', ...other } = props;

    return <StyledFootnote ref={ref} variant={variant} {...other} />;
  },
);

Footnote.displayName = 'Footnote';
