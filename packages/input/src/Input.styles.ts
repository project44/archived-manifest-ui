import { styled } from '@manifest-ui/styled';

const themeKey = 'input';

export const StyledInputContainer = styled('div', {
  slot: 'container',
  themeKey,
})({
  border: 0,
  m: 0,
  p: 0,
  position: 'relative',
});

export const StyledInput = styled('input', {
  slot: 'input',
  themeKey,
})(
  ({ theme }) => ({
    appearance: 'none',
    borderColor: 'neutral.200',
    borderRadius: 'medium',
    borderStyle: 'solid',
    borderWidth: 'small',
    color: 'emphasis.primary',
    fontFamily: 'body',
    fontSize: 'small',
    fontWeight: 'medium',
    lineHeight: 'medium',
    letterSpacing: 'normal',
    m: 0,
    outline: 0,
    pe: 3,
    ps: 3,
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

    '&[data-has-endIcon]': {
      pe: 48,
    },

    '&[data-has-startIcon]': {
      ps: 48,
    },
  }),
  ({ size }) => ({
    ...(size === 'medium' && { minH: 40 }),
    ...(size === 'small' && { minH: 32 }),
  }),
);

export const StyledInputIcon = styled('div', {
  slot: 'icon',
  themeKey,
})({
  alignItems: 'center',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  pe: 3,
  ps: 3,
  pointerEvents: 'none',
  position: 'absolute',
  top: 0,
  zIndex: 1,

  '&[data-placement=start]': {
    left: 0,
  },

  '&[data-placement=end]': {
    right: 0,
  },
});
