import * as CSS from 'csstype';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  OtherProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TransitionProps,
  TypographyProps,
} from './props';

export type Cache = Map<string, any>;

export interface ConfigStyle {
  defaultScale?: Array<string | number>;
  properties?: Array<keyof CSS.Properties | (string & {})>;
  property?: keyof CSS.Properties | (string & {});
  scale?: string;
  transform?: Transform;
}

export interface Configs {
  [key: string]: true | ConfigStyle;
}

export type CSSObject = RecursiveCSSObject<CSSWithMultiValues>;

export type CSSDefinition<D> = D | string | RecursiveCSSSelector<D | string>;

export type CSSWithMultiValues = {
  [K in keyof SystemCSSProperties]?: K extends keyof SystemProps
    ? SystemProps[K] | PropertyValue<K>
    : PropertyValue<K>;
};

export interface ComponentOverride {
  slots?: Record<string, SystemStyleObject>;
  sizes?: Record<string, SystemStyleObject>;
  variants?: Record<string, SystemStyleObject>;
}

export interface FunctionCSSInterpolation {
  (theme: SystemTheme): CSSObject;
}

export type Length = string | 0 | number;

export type ObjectOrArray<T, K extends keyof any = keyof any> =
  | T[]
  | Record<K, T | Record<K, T> | T[]>;

export type Prop<T> = T | ResponsiveValue<T> | ((theme: SystemTheme) => T | ResponsiveValue<T>);

type PropertyValue<K extends keyof SystemCSSProperties> = ThemeThunk<
  ResponsiveValue<boolean | number | string | SystemCSSProperties[K]>
>;

export interface Props {
  [key: string]: any;
}

type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>;

export type ResponsiveArray<T> = Array<T | null>;

export interface ResponsiveObject<T> {
  [breakpoint: string]: T;
}

export type ResponsiveValue<T> = T | ResponsiveArray<T> | ResponsiveObject<T>;

export type SystemProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  OtherProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TransitionProps &
  TypographyProps;

export type Scale = ObjectOrArray<number | string>;

export interface Transform {
  (scale: Scale | undefined, path: string | number, fallback?: any, props?: any): any;
}

export interface RecursiveCSSSelector<D> {
  [selector: string]: CSSDefinition<D> & D;
}

export type RecursivePseudo<D> = {
  [K in keyof CSS.Pseudos]?: PseudoSelectorDefinition<D> & D;
};

export type RecursiveCSSObject<D> = D & (D | RecursivePseudo<D> | RecursiveCSSSelector<D>);

export interface SystemCSSProperties
  extends CSS.Properties,
    Omit<SystemProps, keyof CSS.Properties> {}

export type SystemStyleObject = CSSObject | FunctionCSSInterpolation;

export interface SystemTheme {
  borders?: ObjectOrArray<CSS.Property.Border<{}>>;
  borderStyles?: ObjectOrArray<CSS.Property.Border<{}>>;
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<Length>>;
  breakpoints?: ObjectOrArray<number | string | symbol>;
  colors?: ObjectOrArray<CSS.Property.Color>;
  components?: Record<string, ComponentOverride>;
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

export type ThemeThunk<T> = T | ((theme: SystemTheme) => T);
