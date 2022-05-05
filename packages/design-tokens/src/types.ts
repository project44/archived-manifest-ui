import * as CSS from 'csstype';

export interface BackgroundColors extends OrdinalScale<ColorToken>, StatusScale<ColorToken> {
  sideNav: ColorToken;
  surface: ColorToken;
  topNav: ColorToken;
}

export interface BorderColors extends StatusScale<ColorToken> {
  disabled: ColorToken;
  primary: ColorToken;
}

export interface BrandColors {
  gradient: ColorToken;
  primary: ColorToken;
}

// TODO: Extend color tokens to support modes (light and dark)
export interface Color {
  background: BackgroundColors;
  black: ColorToken;
  brand: BrandColors;
  border: BorderColors;
  contrast: ContrastColors;
  palette: PaletteColors;
  status: StatusColors;
  text: TextColors;
  white: ColorToken;
}

export interface ColorScale {
  50: ColorToken;
  100: ColorToken;
  200: ColorToken;
  300: ColorToken;
  400: ColorToken;
  500: ColorToken;
  600: ColorToken;
  700: ColorToken;
  800: ColorToken;
  900: ColorToken;
}

export type ColorToken = Token<CSS.Property.Color>;

export interface ContrastColors extends StatusScale<ColorToken> {
  brand: ColorToken;
}

export type FontFamilyToken = Token<CSS.Property.FontFamily>;

export interface FontFamily {
  text: FontFamilyToken;
  mono: FontFamilyToken;
}

export type FontSizeToken = Token<CSS.Property.FontSize>;

export type FontSize = SizeScale<FontSizeToken>;

export type FontWeightToken = Token<CSS.Property.FontWeight>;

export interface FontWeight {
  bold: FontWeightToken;
  regular: FontWeightToken;
  semibold: FontWeightToken;
}

export type TLengthDesignTokens = string | 0 | number;

export type LetterSpacingToken = Token<CSS.Property.LetterSpacing<TLengthDesignTokens>>;

export type LetterSpacing = Omit<SizeScale<LetterSpacingToken>, 'x-large' | 'xx-large'>;

export type LineHeightToken = Token<CSS.Property.LetterSpacing<TLengthDesignTokens>>;

export type LineHeight = SizeScale<LineHeightToken>;

export type Modes = 'light';

export interface NoneScale<T> {
  none: T;
}

export interface OrdinalScale<T> {
  primary: T;
  secondary: T;
  tertiary: T;
}

export interface PaletteColors {
  blue: ColorScale;
  brown: ColorScale;
  cerulean: ColorScale;
  cyan: ColorScale;
  green: ColorScale;
  grey: ColorScale;
  indigo: ColorScale;
  mint: ColorScale;
  orange: ColorScale;
  pink: ColorScale;
  purple: ColorScale;
  red: ColorScale;
  yellow: ColorScale;
}

export type RadiiToken = Token<CSS.Property.BorderRadius<TLengthDesignTokens>>;

export interface Radii
  extends Omit<SizeScale<RadiiToken>, 'x-small' | 'medium' | 'large' | 'x-large' | 'xx-large'>,
    NoneScale<RadiiToken> {}

export interface Shadow
  extends Omit<SizeScale<RadiiToken>, 'x-small' | 'x-large' | 'xx-large'>,
    NoneScale<RadiiToken> {}

export type SpaceToken = Token<CSS.Property.Margin<number | string>>;

export interface Space extends Omit<SizeScale<SpaceToken>, 'xx-large'>, NoneScale<RadiiToken> {
  base: SpaceToken;
}

export type StatusColors = StatusScale<ColorScale>;

export interface SizeScale<T> {
  'x-small': T;
  small: T;
  medium: T;
  large: T;
  'x-large': T;
  'xx-large': T;
}

export interface StatusScale<T> {
  danger: T;
  success: T;
  warning: T;
}

export interface TextColors extends OrdinalScale<ColorToken>, StatusScale<ColorToken> {
  disabled: ColorToken;
}

export interface Token<T = any> {
  value: T;
}

export interface Tokens {
  color: Color;
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  letterSpacing: LetterSpacing;
  lineHeight: LineHeight;
  radii: Radii;
  shadow: Shadow;
  space: Space;
}
