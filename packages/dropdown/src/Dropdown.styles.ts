import { focusStyles } from '@manifest-ui/theme';
import { styled } from '@manifest-ui/styled';

const themeKey = 'dropdown';

export const StyledDropdownMenu = styled('div', { themeKey })({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
  maxHeight: 480,
  minWidth: 224,
  maxWidth: 448,
  overflow: 'auto',
  padding: 2,
  paddingY: 2,

  '& > .manifestui-separator': {
    mx: -2,
    my: 2,
  },
});

export const StyledDropdownItem = styled('button', {
  slot: 'item',
  themeKey,
})(
  {
    alignItems: 'center',
    backgroundColor: 'transparent',
    border: 0,
    borderRadius: 'medium',
    boxSizing: 'border-box',
    color: 'emphasis.primary',
    cursor: 'pointer',
    display: 'flex',
    fontFamily: 'body',
    fontSize: 'medium',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 'large',
    outline: 0,
    px: 3,
    py: 2,
    transitionDuration: 'base',
    transitionProperty: 'colors',

    '&:hover': {
      backgroundColor: 'neutral.100',
    },

    '&[data-disabled]': {
      cursor: 'not-allowed',
      opacity: 0.32,
      pointerEvents: 'none',
    },

    '&[data-selected]': {
      backgroundColor: 'neutral.300',
    },
  },
  focusStyles,
);

export const StyledDropdownItemText = styled('span', {
  slot: 'text',
  themeKey,
})({
  display: 'block',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const StyledDropdownItemIcon = styled('span', {
  slot: 'icon',
  themeKey,
})({
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,

  '&[data-placement=end]': {
    ml: 2,
    mr: -1,
  },

  '&[data-placement=start]': {
    ml: -1,
    mr: 2,
  },
});
