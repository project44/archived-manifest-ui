import { styled } from '@manifest-ui/styled';

const themeKey = 'formConrtol';

export const StyledFormControl = styled('div', { themeKey })({
  border: 0,
  display: 'inline-flex',
  flexDirection: 'column',
  margin: 0,
  padding: 0,
  position: 'relative',
  width: '100%',
});

export const StyledFormControlHelperText = styled('div', {
  slot: 'helperText',
  themeKey,
})({
  color: 'emphasis.tertiary',
  fontFamily: 'body',
  fontSize: 'x-small',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  lineHeight: 'small',
  marginTop: 2,

  '&[data-invalid]': {
    color: 'error',
  },
});

export const StyledFormControlLabel = styled('label', {
  slot: 'label',
  themeKey,
})({
  color: 'emphasis.secondary',
  fontFamily: 'body',
  fontSize: 'small',
  fontWeight: 'medium',
  letterSpacing: 'normal',
  lineHeight: 'medium',
  padding: 0,
  marginBottom: 2,
  position: 'relative',

  '&[data-invalid]': {
    color: 'error',
  },
});

export const StyledRequiredIndicator = styled('span', {
  slot: 'requiredIndicator',
  themeKey,
})();
