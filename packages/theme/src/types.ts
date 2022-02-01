import * as CSS from 'csstype';
import { ComponentOverride } from '@manifest-ui/styled-system';

export type Color = Record<ColorScale, string>;

export interface Colors {
  emphasis: Record<EmphasisScale, string>;
  fill: Record<FillScale, Color>;
  main: MainColors;
  status: Record<StatusScale, Color>;
}

export type ColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type Direction = 'ltr' | 'rtl';

export type DurationScale = 'base' | 'fast' | 'slow';

export type EmphasisScale = 'disabled' | 'high' | 'medium' | 'low';

export type FillScale =
  | 'blue'
  | 'brown'
  | 'cerulean'
  | 'cyan'
  | 'green'
  | 'indigo'
  | 'mint'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'red'
  | 'yellow';

export type FontScale = 'body' | 'mono';

export type FontWeightScale = 'bold' | 'light' | 'medium' | 'normal' | 'semibold';

export type GradientScale = 0 | 20 | 40 | 60;

export type Length = string | 0 | number;

export type LetterSpacingScale = 'normal' | 'tight' | 'wide';
export interface MainColors {
  black: string;
  brand: Color;
  brandGradient: Record<GradientScale, string>;
  white: string;
}

export type Mode = 'dark' | 'light';

export type PartialTheme = {
  [K in keyof Theme]?: Partial<Theme[K]>;
};

export type PropertyScale = 'colors' | 'common';

export type RadiiScale = 'full' | 'medium' | 'none';

export type SizeScale =
  | 'xxx-small'
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large';

export type StatusScale = 'danger' | 'success' | 'warning';

export interface Theme {
  borderWidths: Partial<Record<SizeScale, CSS.Property.BorderWidth<string | 0 | number>>>;
  breakpoints: Array<number | string | symbol>;
  colors: Colors;
  components?: Record<string, ComponentOverride>;
  direction: Direction;
  fonts: Record<FontScale, CSS.Property.FontFamily>;
  fontSizes: Record<TypeScale, CSS.Property.FontSize<number>>;
  fontWeights: Record<FontWeightScale, CSS.Property.FontWeight>;
  letterSpacings: Record<LetterSpacingScale, CSS.Property.LetterSpacing<Length>>;
  lineHeights: Partial<Record<TypeScale, CSS.Property.LineHeight<Length>>>;
  mediaQueries: { [size: string]: string };
  mode: Mode;
  radii: Record<RadiiScale, CSS.Property.BorderRadius<Length>>;
  shadows: Partial<Record<SizeScale, CSS.Property.BoxShadow>>;
  sizes: Partial<Record<SizeScale, CSS.Property.Height<{}> | CSS.Property.Width<{}>>>;
  space: Array<CSS.Property.Margin<number | string>>;
  transitions: Transitions;
  zIndices: Record<string, CSS.Property.ZIndex>;
}

export type TimingScale = 'ease' | 'easeIn' | 'easeInOut' | 'easeOut';

export interface Transitions {
  duration: Record<DurationScale, CSS.Property.TransitionDuration>;
  property: Record<PropertyScale, CSS.Property.TransitionProperty>;
  timingFunction: Record<TimingScale, CSS.Property.TransitionTimingFunction>;
}

export type TypeScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
