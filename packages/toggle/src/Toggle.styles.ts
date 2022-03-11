import { focusStyles, visuallyHiddenStyles } from '@manifest-ui/theme';
import { styled } from '@manifest-ui/styled';

const themeKey = 'toggle';

export const StyledToggleContainer = styled('div', {
  slot: 'container',
  themeKey,
})(
  {
    alignItems: 'center',
    backgroundColor: 'neutral.500',
    borderRadius: 'full',
    boxSizing: 'border-box',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-flex',
    h: 24,
    m: 0,
    minW: 44,
    p: 0,
    position: 'relative',
    transitionDuration: 'base',
    transitionProperty: 'common',
    w: 44,

    '&::before': {
      backgroundColor: 'white',
      borderRadius: 'full',
      boxSizing: 'border-box',
      content: '""',
      display: 'inline-block',
      h: 18,
      transform: 'translateX(3px)',
      transitionDuration: 'base',
      transitionProperty: 'common',
      w: 18,
      zIndex: 1,
    },

    '&[data-disabled]': {
      cursor: 'not-allowed',
      opacity: 0.38,
    },

    '&[data-checked]': {
      backgroundImage: 'gradient.default',

      '&::before': {
        transform: 'translateX(23px)',
        borderColor: 'white',
      },

      '&[data-hover]': {
        backgroundImage: 'gradient.hover',
      },
    },

    '&[data-hover]': {
      backgroundColor: 'neutral.600',
    },
  },
  ({ theme }) => focusStyles({ borderRadius: 'full', theme }),
);

export const StyledToggleInput = styled('input', {
  slot: 'input',
  themeKey,
})(visuallyHiddenStyles);

export const StyledToggleLabel = styled('label', {
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

export const StyledToggleText = styled('span', {
  slot: 'text',
  themeKey,
})({
  fontFamily: 'body',
  fontSize: 'small',
  letterSpacing: 'normal',
  lineHeight: 'medium',
  marginInlineStart: 3,
});
