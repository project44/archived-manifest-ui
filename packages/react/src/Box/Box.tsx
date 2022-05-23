import { ComponentProps } from '../types';
import { styled } from '../styles';

export type BoxProps = ComponentProps<typeof Box>;

export const Box = styled('div', { boxSizing: 'border-box', margin: 0, minWidth: 0 });

Box.displayName = 'ManifestBox';
