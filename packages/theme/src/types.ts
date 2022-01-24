import { SystemStyleObject } from '@styled-system/css';

export type Color = Partial<Record<ColorScale, string>>;

export interface Colors {
  black: string;
  brand: Color;
  error: Color;
  info: Color;
  neutral: Color;
  success: Color;
  warning: Color;
  white: string;
}

export interface ColorsInput {
  black?: string;
  brand?: Color;
  error?: Color;
  info?: Color;
  neutral?: Color;
  success?: Color;
  warning?: Color;
  white?: string;
}

export interface ComponentOverride {
  overrides?: SystemStyleObject;
  sizes?: Record<string, SystemStyleObject>;
  variants?: Record<string, SystemStyleObject>;
}

export type Direction = 'ltr' | 'rtl';

/**
 * Scale definitions for each theme.
 */
export type BorderWidthScale = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export type ColorScale = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type FontScale = 'body' | 'heading' | 'mono';
export type FontWeightScale = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type LetterSpacingScale = 'tight' | 'tighter' | 'normal' | 'wide';
export type MediaQueryScale = 'small' | 'medium' | 'large' | 'x-large';
export type RadiusScale = 'none' | 'full' | 'small' | 'medium' | 'large';
export type ShadowScale = 'none' | 'small' | 'medium' | 'large' | 'x-large';
export type SizeScale =
  | 'xxx-small'
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'xxx-medium'
  | 'xx-medium'
  | 'x-medium'
  | 'medium'
  | 'xxx-large'
  | 'xx-large'
  | 'x-large'
  | 'large';
export type SpaceScale = SizeScale;
export type ZIndexScale =
  | 'dialog'
  | 'toast'
  | 'default'
  | 'popover'
  | 'overlay'
  | 'modal'
  | 'sticky'
  | 'dropdown'
  | 'tooltip';
export type ThemeScale<S extends string | number, T = string> = Partial<Record<S, T>>;

export type Mode = 'dark' | 'light';

export interface Theme {
  colors: Colors;
  breakpoints: Array<string>;
  borderWidths: ThemeScale<BorderWidthScale, string | number>;
  components?: Record<string, ComponentOverride>;
  direction: Direction;
  fonts: ThemeScale<FontScale, string>;
  fontSizes: ThemeScale<number, string | number>;
  fontWeights: ThemeScale<FontWeightScale, string | number>;
  letterSpacings: ThemeScale<LetterSpacingScale, string | number>;
  lineHeights: ThemeScale<number, string | number>;
  mediaQueries: ThemeScale<MediaQueryScale, string>;
  mode: Mode;
  radii: ThemeScale<RadiusScale, string | number>;
  shadow: ThemeScale<ShadowScale, string | number>;
  sizes: ThemeScale<SizeScale, string | number>;
  space: ThemeScale<SpaceScale, string | number>;
  zIndices: ThemeScale<ZIndexScale, number>;
}

/**
 * Making o less strict theme type to support partial theming.
 */
export interface ThemeOptions {
  colors?: Partial<ColorsInput>;
  breakpoints?: Array<string>;
  borderWidths?: ThemeScale<BorderWidthScale, string | number>;
  components?: Record<string, ComponentOverride>;
  direction?: Direction;
  fonts?: ThemeScale<FontScale, string>;
  fontSizes?: ThemeScale<number, string | number>;
  fontWeights?: ThemeScale<FontWeightScale, string | number>;
  letterSpacings?: ThemeScale<LetterSpacingScale, string | number>;
  lineHeights?: ThemeScale<number, string | number>;
  mediaQueries?: ThemeScale<MediaQueryScale, string>;
  mode?: Mode;
  radii?: ThemeScale<RadiusScale, string | number>;
  shadow?: ThemeScale<ShadowScale, string | number>;
  sizes?: ThemeScale<SizeScale, string | number>;
  space?: ThemeScale<SpaceScale, string | number>;
  zIndices?: ThemeScale<ZIndexScale, number>;
}
