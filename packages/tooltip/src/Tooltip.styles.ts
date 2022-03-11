import { PopperContent } from '@manifest-ui/popper';
import { styled } from '@manifest-ui/styled';

export const StyledTooltip = styled(PopperContent, { themeKey: 'tooltip' })({
  backgroundColor: 'emphasis.secondary',
  borderRadius: 'large',
  boxShadow: 'large',
  boxSizing: 'border-box',
  color: 'white',
  fontFamily: 'body',
  fontSize: 'x-small',
  fontWeight: 'semibold',
  letterSpacing: 'normal',
  lineHeight: 'small',
  overflow: 'hidden',
  position: 'relative',
  px: 2,
  py: 1,
});
