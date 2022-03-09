import { styled } from '@manifest-ui/styled';

const themeKey = 'textarea';

export const StyledTextarea = styled('textarea', {
  themeKey,
})(({ theme }) => ({
  appearance: 'none',
  borderColor: 'neutral.200',
  borderRadius: 'medium',
  boxSizing: 'border-box',
  borderStyle: 'solid',
  borderWidth: 'small',
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

  '&::placeholder': {
    color: 'emphasis.tertiary',
    opacity: 1,
    userSelect: 'none',
  },

  '&:disabled': {
    backgroundColor: 'neutral.100',
    color: 'emphasis.disabled',
    cursor: 'not-allowed',
    pointerEvents: 'none',

    '&::placeholder': {
      color: 'emphasis.disabled',
    },
  },

  '&:hover': {
    borderColor: 'neutral.400',
  },

  '&:focus': {
    borderColor: 'primary.500',
    boxShadow: `0 0 0 2px ${theme.colors?.primary?.[200] as string}`,
    outline: 'none',
  },

  '&[data-invalid]': {
    borderColor: 'status.danger.500',
    color: 'status.danger.500',

    '&:focus': {
      boxShadow: `0 0 0 2px ${theme.colors?.status?.danger?.[200] as string}`,
      outline: 'none',
    },
  },
}));
