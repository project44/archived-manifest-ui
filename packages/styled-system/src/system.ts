import { ConfigStyle, system } from 'styled-system';
import { OtherProps } from './types';

const config: Record<keyof OtherProps, boolean | ConfigStyle> = {
  animation: true,
  appearance: true,
  cursor: true,
  fill: {
    property: 'fill' as const,
    scale: 'colors',
  },
  float: true,
  objectFit: true,
  objectPosition: true,
  outline: true,
  outlineOffset: true,
  overflowWrap: true,
  pointerEvents: true,
  resize: true,
  stroke: {
    property: 'stroke' as const,
    scale: 'colors',
  },
  textDecoration: true,
  textTransform: true,
  transform: true,
  transformOrigin: true,
  userSelect: true,
  visibility: true,
  whiteSpace: true,
  willChange: true,
};

export const other = system(config);

export {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';
