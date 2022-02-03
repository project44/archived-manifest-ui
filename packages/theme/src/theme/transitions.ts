import * as CSS from 'csstype';

export type TransitionDuration = 'base' | 'fast' | 'slow';

export type TransitionProperty = 'background' | 'colors' | 'common' | 'position';

export type TransitionTiming = 'ease' | 'easeIn' | 'easeInOut' | 'easeOut';

export const duration: Record<TransitionDuration, CSS.Property.TransitionDuration> = {
  base: '200ms',
  fast: '125ms',
  slow: '300ms',
};

export const property: Record<TransitionProperty, CSS.Property.TransitionProperty> = {
  background: 'background-color, background-image, background-position',
  colors: 'background-color, border-color, color, fill, stroke',
  common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  position: 'left, right, top, bottom',
};

export const timingFunction: Record<TransitionTiming, CSS.Property.TransitionTimingFunction> = {
  ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
};
