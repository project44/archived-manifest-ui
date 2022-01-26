import { ComponentProps, styled } from '@manifest-ui/styled';

export type ImageProps = ComponentProps<typeof Image>;

export const Image = styled('img', {
  label: 'Image',
  themeKey: 'image',
})({
  display: 'block',
  height: 'auto',
  minHeight: '100%',
  width: '100%',
});
