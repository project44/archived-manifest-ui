import { focusStyles } from '@manifest-ui/theme';
import { styled } from '@manifest-ui/styled';

const themeKey = 'textarea';

export const StyledTextarea = styled('textarea', {
  themeKey,
})({
  appearance: 'none',
  background: 'none',
  border: 'none',
  boxSizing: 'border-box',
  color: 'emphasis.primary',
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'medium',
  height: 'auto',
  lineHeight: 'medium',
  letterSpacing: 'normal',
  m: 0,
  minH: 40,
  outline: 0,
  px: 3,
  py: 2,
  resize: 'none',
  textAlign: 'left',
  transitionDuration: 'base',
  transitionProperty: 'common',
  width: '100%',
  zIndex: 20,

  '&::placeholder': {
    color: 'emphasis.tertiary',
    opacity: 1,
    userSelect: 'none',
  },

  '&:disabled': {
    pointerEvents: 'none',

    '&::placeholder': {
      color: 'emphasis.disabled',
    },
  },
});

export const StyledTextareaContainer = styled('div', {
  slot: 'container',
  themeKey,
})(({ theme }) => focusStyles({ borderWidth: 'small', theme }), {
  borderColor: 'neutral.200',
  borderRadius: 'medium',
  borderStyle: 'solid',
  borderWidth: 'small',
  bottom: 0,
  boxSizing: 'border-box',
  left: 0,
  pointerEvents: 'none',
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 10,

  '&[data-disabled]': {
    backgroundColor: 'neutral.100',
    color: 'emphasis.disabled',
  },

  '&[data-hover]': {
    borderColor: 'neutral.400',
  },

  '&[data-invalid]': {
    borderColor: 'status.danger.500',
    color: 'status.danger.500',
  },
});

export const StyledTextareaWrapper = styled('div', {
  slot: 'wrapper',
  themeKey,
})({
  alignItems: 'center',
  border: 0,
  color: 'emphasis.secondary',
  cursor: 'text',
  display: 'flex',
  m: 0,
  p: 0,
  position: 'relative',

  '&[data-disabled]': {
    cursor: 'not-allowed',
  },
});
