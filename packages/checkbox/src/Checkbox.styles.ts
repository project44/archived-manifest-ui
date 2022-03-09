import { Check } from '@manifest-ui/icons';
import { styled } from '@manifest-ui/styled';

const themeKey = 'checkbox';

export const StyledCheckboxContainer = styled('div', {
  slot: 'container',
  themeKey,
})({
  boxSizing: 'border-box',
  color: 'white',
  h: 18,
  position: 'relative',
  w: 18,
});

export const StyledCheckboxIcon = styled('svg', {
  slot: 'icon',
  themeKey,
})({
  bottom: 0,
  fontSize: 18,
  h: 18,
  left: 0,
  opacity: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  transitionDuration: 'base',
  transitionProperty: 'common',
  w: 18,
  zIndex: 1,
});

export const StyledCheckboxLabel = styled('label', {
  slot: 'root',
  themeKey,
})({
  alignItems: 'center',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'flex-start',
  position: 'relative',
  verticalAlign: 'top',
  width: 'initial',

  '&[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.38,
  },
});

export const StyledCheckboxInput = styled('input', {
  slot: 'input',
  themeKey,
})(({ theme }) => ({
  appearance: 'none',
  backgroundColor: 'white',
  borderColor: 'neutral.500',
  borderRadius: 'medium',
  borderStyle: 'solid',
  borderWidth: 'medium',
  boxSizing: 'border-box',
  color: 'white',
  cursor: 'pointer',
  h: 18,
  m: 0,
  outline: 0,
  p: 0,
  transitionDuration: 'base',
  transitionProperty: 'common',
  w: 18,

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.38,
  },

  '&:checked, &[aria-checked=mixed]': {
    backgroundImage: 'gradient.default',
    border: 0,

    '& + .manifestui-checkbox-icon': {
      opacity: 1,
    },

    '&:focus': {
      backgroundImage: 'gradient.focus',
      boxShadow: `0 0 0 2px ${theme.colors?.primary?.[200] as string}`,
      outline: 'none',
    },

    '&:hover:not(&:focus)': {
      backgroundImage: 'gradient.hover',
    },
  },

  '&:focus': {
    borderColor: 'neutral.700',
    boxShadow: `0 0 0 2px ${theme.colors?.neutral?.[200] as string}`,
    outline: 'none',
  },

  '&:hover': {
    borderColor: 'neutral.600',
  },
}));

export const StyledCheckboxText = styled('span', {
  slot: 'text',
  themeKey,
})({
  fontFamily: 'body',
  fontSize: 'small',
  letterSpacing: 'normal',
  lineHeight: 'medium',
  marginInlineStart: 3,
});
