import { TooltipContent as RadixTooltipContent } from '@radix-ui/react-tooltip';
import { styled } from '@manifest-ui/styled';

export const StyledTooltip = styled(RadixTooltipContent, { themeKey: 'tooltip' })({
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
