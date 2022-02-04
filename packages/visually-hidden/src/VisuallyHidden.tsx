import { ComponentProps, styled } from '@manifest-ui/styled';

export type VisuallyHiddenProps = ComponentProps<typeof VisuallyHidden>;

export const VisuallyHidden = styled('span', {
  label: 'VisuallyHidden',
  themeKey: 'visuallyHidden',
})({
  border: 'none',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: 1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  top: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
