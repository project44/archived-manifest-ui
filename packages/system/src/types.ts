import * as CSS from 'csstype';
import type { ObjectOrArray, Config as SystemConfig } from 'styled-system';
import { Pseudos } from './css';
import { StyledProps } from './props';

export type As<Props = any> = React.ElementType<Props>;

export type Config<T> = Record<keyof T, SystemConfig[string]>;

export type Union<T> = T | (string & {});

// ------------------------------------------------------ //
// Stub and extend emotion types to support theme ObjectOrArrays
//
// Influenced by chakra-ui CSSObject definition.
// ------------------------------------------------------ //
export type CSSDefinition<D> = D | string | RecursiveCSSSelector<D | string>;

export type CSSObject = RecursiveCSSObject<CSSWithMultiValues>;

export interface CSSProperties extends CSS.Properties, Omit<StyledProps, keyof CSS.Properties> {}

export type CSSWithMultiValues = {
  [K in keyof CSSProperties]?: K extends keyof SystemProps
    ? SystemProps[K] | PropertyValue<K>
    : PropertyValue<K>;
};

export interface FunctionCSSInterpolation {
  (theme: Theme): CSSObject;
}

export type Length = string | 0 | (number & {});

type PropertyValue<K extends keyof CSSProperties> = ThemeThunk<
  ResponsiveValue<boolean | number | string | CSSProperties[K]>
>;

type PseudoKeys = keyof CSS.Pseudos | keyof Pseudos;

export type PseudoProps = {
  [K in keyof Pseudos]?: CSSObject;
};

type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>;

export type RecursivePseudo<D> = {
  [K in PseudoKeys]?: PseudoSelectorDefinition<D> & D;
};

export interface RecursiveCSSSelector<D> {
  [selector: string]: CSSDefinition<D> & D;
}

export type RecursiveCSSObject<D> = D & (D | RecursivePseudo<D> | RecursiveCSSSelector<D>);

export type ResponsiveArray<T> = Array<T | null>;

export interface ResponsiveObject<T> {
  [breakpoint: string]: T;
}

export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>;

export interface SystemProps extends StyledProps, PseudoProps {}

export type SystemStyleObject = CSSObject | FunctionCSSInterpolation;

export interface Theme {
  borders?: ObjectOrArray<CSS.Property.Border<{}>>;
  borderStyles?: ObjectOrArray<CSS.Property.Border<{}>>;
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<Length>>;
  breakpoints?: Array<string>;
  colors?: ObjectOrArray<CSS.Property.Color>;
  fonts?: ObjectOrArray<CSS.Property.FontFamily>;
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<string | number>>;
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight>;
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<Length>>;
  letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<Length>>;
  mediaQueries?: { [size: string]: string };
  radii?: ObjectOrArray<CSS.Property.BorderRadius<Length>>;
  shadows?: ObjectOrArray<CSS.Property.BoxShadow>;
  sizes?: ObjectOrArray<CSS.Property.Height<{}> | CSS.Property.Width<{}>>;
  space?: ObjectOrArray<CSS.Property.Margin<number | string>>;
  transitions?: ObjectOrArray<CSS.Property.Transition>;
  zIndices?: ObjectOrArray<CSS.Property.ZIndex>;
}

export type ThemeThunk<T> = T | ((theme: Theme) => T);

export type Token<T, S extends keyof Theme | (string & {}) = string> = S extends keyof Theme
  ? ResponsiveValue<Union<T | Theme[S]>>
  : ResponsiveValue<T>;
