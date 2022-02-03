import * as colors from './colors';
import * as transitions from './transitions';
import { borderWidths, radii } from './borders';
import { breakpoints, mediaQueries } from './responsive';
import { fonts, fontSizes, fontWeights, letterSpacings, lineHeights } from './typography';
import { shadows, zIndices } from './elevation';
import { sizes, space } from './layout';
import { ComponentOverride } from '@manifest-ui/styled-system';

export type Direction = 'ltr' | 'rtl';

export type Mode = 'dark' | 'light';

const components: Record<string, ComponentOverride> = {};

export const theme = {
  breakpoints,
  borderWidths,
  components,
  colors,
  direction: 'ltr' as Direction,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  mediaQueries,
  mode: 'light' as Mode,
  radii,
  shadows,
  sizes,
  space,
  transitions,
  zIndices,
};

export type Theme = typeof theme;

export * from './borders';
export * from './colors';
export * from './elevation';
export * from './layout';
export * from './responsive';
export * from './transitions';
export * from './typography';
