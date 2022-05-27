import { styled, focus } from '../../styles';

export const StyledButton = styled(
  'button',
  {
    alignItems: 'center',
    all: 'unset',
    appearance: 'none',
    border: 'none',
    borderRadius: '$small',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    fontFamily: '$text',
    fontSize: '$small',
    fontWeight: '$semibold',
    justifyContent: 'center',
    letterSpacing: '$medium',
    lineHeight: '$small',
    position: 'relative',
    px: '12px',
    transition: '$default',
    userSelect: 'none',
    whiteSpace: 'nowrap',

    '&:disabled': {
      pointerEvents: 'none',
      opacity: 0.38,
    },

    variants: {
      variant: {
        primary: {
          backgroundColor: '$palette-cerulean-500',
          boxShadow: '$small',
          color: '$white',

          '&:active': {
            backgroundColor: '$palette-cerulean-900',
            boxShadow: '$inset',
          },

          '&:hover': {
            backgroundColor: '$palette-cerulean-700',
          },
        },
        secondary: {
          backgroundColor: '$white',
          boxShadow: '$small',

          '&:active': {
            backgroundColor: '$palette-grey-300',
            boxShadow: '$inset',
          },

          '&:hover': {
            backgroundColor: '$palette-grey-100',
          },
        },
        tertiary: {
          backgroundColor: 'transparent',

          '&:active': {
            backgroundColor: '$palette-grey-300',
          },

          '&:hover': {
            backgroundColor: '$palette-grey-100',
          },
        },
      },
      size: {
        medium: {
          py: '$small',
        },
        small: {
          py: '$x-small',
        },
      },
    },
    defaultVariants: {
      size: 'medium',
      variant: 'primary',
    },
  },
  focus,
);

export const StyledButtonIcon = styled('span', {
  alignSelf: 'center',
  display: 'inline-flex',
  flexShrink: 0,

  '&.manifest-button-icon-end': {
    marginLeft: '$small',
  },

  '&manifest-button-icon-start': {
    marginRight: '$small',
  },
});
