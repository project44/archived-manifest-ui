import { focusStyles, visuallyHiddenStyles } from '@manifest-ui/theme-utils';
import { styled } from '@manifest-ui/styled';

const themeKey = 'radio';

export const StyledRadioContainer = styled('div', {
  slot: 'container',
  themeKey,
})(
  {
    alignItems: 'center',
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
    w: 20,

    '&[data-disabled]': {
      cursor: 'not-allowed',
      opacity: 0.38,
    },

    '&[data-checked]': {
      backgroundImage: 'gradient.default',
      borderColor: 'transparent',

      '&::before': {
        background: 'currentColor',
        borderRadius: 10,
        content: '""',
        display: 'inline-block',
        h: 10,
        position: 'relative',
        w: 10,
      },
    },
  },
  ({ theme }) => focusStyles({ borderRadius: 'full', borderWidth: 'large', theme }),
);

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
})(visuallyHiddenStyles);

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
