import { PopperContent } from '@manifest-ui/popper';
import { styled } from '@manifest-ui/styled';

export const StyledPopoverContent = styled(PopperContent, {
  themeKey: 'popover',
})({
  backgroundColor: 'white',
  borderRadius: 'medium',
  boxShadow: 'medium',
  zIndex: 'popover',
});
