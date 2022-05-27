import { css } from '../config';

export const focus = css({
  WebkitTapHighlightColor: 'transparent',

  '&:focus:not(&:focus-visible)': {
    outline: 'none',
  },

  '&:focus': {
    outline: '$colors$palette-blue-200 solid 2px',
    outlineOffset: '2px',
  },
});
