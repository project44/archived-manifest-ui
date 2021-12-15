import { styled } from '../stitches.config';
import type { ComponentProps } from '../stitches.config';

export type ImageProps = ComponentProps<typeof Image>;

export const Image = styled('img', {
  verticalAlign: 'middle',
  maxWidth: '100%',
});
