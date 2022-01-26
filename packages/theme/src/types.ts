import * as CSS from 'csstype';
import { SystemStyleObject } from '@manifest-ui/styled-system';

export type Color = Partial<Record<ColorScale, string>>;

export interface Colors {
  background?: CSS.Property.Color;
  black?: CSS.Property.Color;
  brand?: Color;
  error?: Color;
  neutral?: Color;
  success?: Color;
  text?: CSS.Property.Color;
  warning?: Color;
  white?: CSS.Property.Color;
}

export type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface ComponentOverride {
  overrides?: SystemStyleObject;
  sizes?: Record<string, SystemStyleObject>;
  variants?: Record<string, SystemStyleObject>;
}

export type Direction = 'ltr' | 'rtl';

export type ThemeScale<S extends string | number, T = string> = Partial<Record<S, T>>;

export type Mode = 'dark' | 'light';

export interface Theme {
  colors?: Colors;
  breakpoints: Array<string>;
  borderWidths?: ThemeScale<string, string | number>;
  components?: Record<string, ComponentOverride>;
  direction?: Direction;
  fonts?: ThemeScale<string, string>;
  fontSizes?: ThemeScale<number, string | number>;
  fontWeights?: ThemeScale<string, string | number>;
  letterSpacings?: ThemeScale<string, string | number>;
  lineHeights?: ThemeScale<number, string | number>;
  mediaQueries?: ThemeScale<string, string>;
  mode?: Mode;
  radii?: ThemeScale<string, string | number>;
  shadows?: ThemeScale<string, string | number>;
  sizes?: ThemeScale<string, string>;
  space?: Array<string>;
  transitions?: Transitions;
  zIndices?: ThemeScale<string, number>;
}

export interface Transitions {
  duration?: ThemeScale<string, string | number>;
  property?: ThemeScale<string, string>;
  timingFunction?: ThemeScale<string, string>;
}
