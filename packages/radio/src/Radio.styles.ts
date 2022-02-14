import { styled } from '@manifest-ui/styled';

const themeKey = 'radio';

export const StyledRadioGroup = styled('div', {
  slot: 'group',
  themeKey,
})({
  border: 0,
  display: 'flex',
  gap: 3,
  m: 0,
  p: 0,

  '&[data-direction=horizontal]': {
    flexFlow: 'row wrap',
  },

  '&[data-direction=vertical]': {
    flexFlow: 'column wrap',
  },
});

export const StyledRadioInput = styled('input', {
  slot: 'input',
  themeKey,
})({
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'white',
  borderColor: 'neutral.500',
  borderRadius: 'full',
  borderStyle: 'solid',
  borderWidth: 'large',
  boxSizing: 'border-box',
  color: 'white',
  cursor: 'pointer',
  display: 'inline-flex',
  h: 20,
  justifyContent: 'center',
  m: 0,
  outline: 0,
  p: 0,
  w: 20,

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.38,
  },

  '&:checked': {
    backgroundImage: 'gradient.default',
    border: 0,

    '&::before': {
      background: 'currentColor',
      borderRadius: 10,
      content: '""',
      display: 'inline-block',
      h: 10,
      position: 'relative',
      w: 10,
    },

    '&:focus': {
      backgroundImage: 'gradient.focus',
    },

    '&:hover:not(&:focus)': {
      backgroundImage: 'gradient.hover',
    },
  },

  '&:hover': {
    borderColor: 'neutral.600',
  },
});

export const StyledRadioLabel = styled('label', {
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

export const StyledRadioText = styled('span', {
  slot: 'text',
  themeKey,
})({
  fontFamily: 'body',
  fontSize: 'small',
  letterSpacing: 'normal',
  lineHeight: 'medium',
  marginInlineStart: 3,
});
