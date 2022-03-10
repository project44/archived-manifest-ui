import { ComponentProps, styled } from '@manifest-ui/styled';
import { visuallyHiddenStyles } from '@manifest-ui/theme';

export type VisuallyHiddenProps = ComponentProps<typeof VisuallyHidden>;

export const VisuallyHidden = styled('span', {
  label: 'VisuallyHidden',
  themeKey: 'visuallyHidden',
})(visuallyHiddenStyles);
