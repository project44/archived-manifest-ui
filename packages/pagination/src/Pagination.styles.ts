import { focusStyles } from '@manifest-ui/theme-utils';
import { styled } from '@manifest-ui/styled';

const themeKey = 'pagination';

export const StyledPagination = styled('div', {
  themeKey,
})({
  alignItems: 'center',
  boxSizing: 'border-box',
  columnGap: '4px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  rowGap: '8px',
});

export const StyledPaginationButton = styled('button', {
  slot: 'button',
  themeKey,
})(
  {
    alignItems: 'center',
    appearance: 'none',
    backgroundColor: 'rgba(128, 133, 140, 0.04)',
    borderColor: 'rgba(128, 133, 140, 0.16)',
    borderStyle: 'solid',
    borderRadius: 'medium',
    borderWidth: 'small',
    boxSizing: 'border-box',
    color: 'emphasis.secondary',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: 'body',
    fontSize: 'small',
    fontWeight: 'semibold',
    h: 32,
    letterSpacing: 'normal',
    lineHeight: 'medium',
    margin: 0,
    outline: 0,
    position: 'relative',
    px: 3,
    py: '7px',
    transitionDuration: 'base',
    transitionProperty: 'common',
    textDecoration: 'none',
    userSelect: 'none',
    width: 'auto',

    '&:disabled': {
      backgroundColor: 'transparent',
      opacity: 0.38,
      pointerEvents: 'none',
    },

    '&:hover': {
      backgroundColor: 'rgba(128, 133, 140, 0.08)',
    },

    '&[data-active]': {
      backgroundColor: 'rgba(128, 133, 140, 0.16)',

      '&:hover': {
        backgroundColor: 'rgba(128, 133, 140, 0.16)',
      },
    },
  },
  focusStyles,
);

export const StyledPaginationEllipsis = styled('div', {
  slot: 'ellipsis',
  themeKey,
})({
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'semibold',
  height: 'auto',
  letterSpacing: 'normal',
  lineHeight: 'large',
  px: 3,
  py: 2,
  textAlign: 'center',
});

export const StyledPaginationText = styled('span', {
  slot: 'text',
  themeKey,
})({
  '&[data-placement=end]': {
    ps: 1,
  },

  '&[data-placement=start]': {
    pe: 1,
  },
});
