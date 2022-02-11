import { Check } from '@manifest-ui/icons';
import { styled } from '@manifest-ui/styled';

const themeKey = 'checkbox';

export const StyledCheckboxContainer = styled('div', {
  slot: 'container',
  themeKey,
})(({ theme }) => ({
  borderRadius: 'medium',
  boxSizing: 'border-box',
  h: 18,
  minH: 18,
  minW: 18,
  outline: 0,
  position: 'relative',
  w: 18,

  '&:focus': {
    ['& > .manifestui-checkbox-control']: {
      '&:after': {
        backgroundImage: `linear-gradient(0deg, rgba(10, 21, 33, 0.4), rgba(10, 21, 33, 0.4)), ${
          theme.colors?.gradient as string
        }`,
      },

      '&:before': {
        borderColor: 'neutral.700',
      },
    },
  },
}));

export const StyledCheckboxControl = styled('div', {
  slot: 'control',
  themeKey,
})({
  alignItems: 'center',
  borderRadius: 'inherit',
  boxSizing: 'border-box',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'absolute',
  transitionDuration: 'base',
  transitionProperty: 'common',
  width: '100%',

  '&:after': {
    backgroundImage: 'gradient',
    borderRadius: 'inherit',
    content: '""',
    height: '100%',
    left: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },

  '&:before': {
    borderRadius: 'inherit',
    borderColor: 'neutral.500',
    borderStyle: 'solid',
    borderWidth: 'medium',
    boxSizing: 'border-box',
    content: '""',
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    transitionDuration: 'base',
    transitionProperty: 'colors',
    width: '100%',
  },

  '&[data-checked]': {
    '&:after': {
      opacity: 1,
    },

    '&:before': {
      opacity: 0,
    },
  },
});

export const StyledCheckboxIcon = styled(Check, {
  slot: 'icon',
  themeKey,
})({
  fontSize: 18,
  height: 18,
  opacity: 0,
  width: 18,
  transitionDuration: 'base',
  transitionProperty: 'common',
  zIndex: 1,

  '&[data-checked]': {
    opacity: 1,
  },
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
  width: 'auto',
  '&[data-disabled]': {
    cursor: 'not-allowed',
    opacity: 0.38,
  },
});

export const StyledCheckboxInput = styled('input', {
  slot: 'input',
  themeKey,
})(({ theme }) => ({
  cursor: 'pointer',
  height: '100%',
  left: 0,
  margin: 0,
  opacity: 0,
  padding: 0,
  position: 'absolute',
  top: 0,
  width: '100%',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:active': {
    ['& ~ .manifestui-checkbox-control']: {
      '&:after': {
        backgroundImage: `linear-gradient(0deg, rgba(10, 21, 33, 0.6), rgba(10, 21, 33, 0.6)), ${
          theme.colors?.gradient as string
        }`,
      },

      '&:before': {
        borderColor: 'neutral.800',
      },
    },
  },

  '&:hover': {
    ['& ~ .manifestui-checkbox-control']: {
      '&:after': {
        backgroundImage: `linear-gradient(0deg, rgba(10, 21, 33, 0.2), rgba(10, 21, 33, 0.2)), ${
          theme.colors?.gradient as string
        }`,
      },

      '&:before': {
        borderColor: 'neutral.600',
      },
    },
  },
}));
