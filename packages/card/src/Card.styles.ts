import { styled } from '@manifest-ui/styled';

const themeKey = 'card';

export const StyledCard = styled('div', {
  themeKey,
})({
  backgroundColor: '#FFFFFF',
  borderRadius: 'medium',
  boxShadow: 'small',
  boxSizing: 'border-box',
  overflow: 'hidden',
});

export const StyledCardBody = styled('div', {
  slot: 'body',
  themeKey,
})({ p: 4 });

export const StyledCardFooter = styled('div', {
  slot: 'footer',
  themeKey,
})({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'flex-end',
  p: 4,
});

export const StyledCardHeader = styled('div', {
  slot: 'header',
  themeKey,
})({
  fontFamily: 'body',
  fontSize: 'large',
  fontWeight: 'bold',
  letterSpacing: 'tight',
  lineHeight: 'large',
  p: 4,
});
