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

// -------------------------------------------------------------------------------- //
// Override emotions styled api types to support our custom theme and styled props //
// ------------------------------------------------------------------------------ //

export type ArrayCSSInterpolation = Array<CSSInterpolation>;

export type ArrayInterpolation<Props> = Array<Interpolation<Props>>;

export type Cache = Map<string, any>;

export interface ComponentSelector {
  __emotion_styles: any;
}
export interface ConfigStyle {
  defaultScale?: Scale;
  properties?: Array<keyof CSS.Properties | (string & {})>;
  property?: keyof CSS.Properties | (string & {});
  scale?: string;
  transform?: Transform;
}
export interface Config {
  /** Property name exposed for use in components */
  [customStyleName: string]: ConfigStyle | boolean;
}

export interface CreateStyled<Options> {
  <
    C extends React.ComponentClass<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>,
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps> & Options,
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & StyledProps,
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<PropsOf<C> & StyledProps> & Options,
  ): CreateStyledComponent<
    PropsOf<C> & StyledProps,
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <
    C extends React.JSXElementConstructor<React.ComponentProps<C>>,
    ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>,
  >(
    component: C,
    options: FilteringStyledOptions<React.ComponentProps<C>, ForwardedProps> & Options,
  ): CreateStyledComponent<Pick<PropsOf<C>, ForwardedProps> & StyledProps, {}, {}>;

  <C extends React.JSXElementConstructor<React.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<PropsOf<C> & StyledProps> & Options,
  ): CreateStyledComponent<PropsOf<C> & StyledProps, {}, {}>;

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag],
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps> & Options,
  ): CreateStyledComponent<StyledProps, Pick<JSX.IntrinsicElements[Tag], ForwardedProps>, {}>;

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<StyledProps> & Options,
  ): CreateStyledComponent<StyledProps, JSX.IntrinsicElements[Tag], {}>;
}

export interface CreateStyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {},
> {
  /**
   * @typeparam AdditionalProps  Additional props to add to your styled component
   */
  <AdditionalProps extends {} = {}>(
    ...styles: Array<
      Interpolation<ComponentProps & SpecificComponentProps & AdditionalProps & { theme: Theme }>
    >
  ): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>;

  (
    template: TemplateStringsArray,
    ...styles: Array<Interpolation<ComponentProps & SpecificComponentProps & { theme: Theme }>>
  ): StyledComponent<ComponentProps, SpecificComponentProps, JSXProps>;

  /**
   * @typeparam AdditionalProps  Additional props to add to your styled component
   */
  <AdditionalProps extends {}>(
    template: TemplateStringsArray,
    ...styles: Array<
      Interpolation<ComponentProps & SpecificComponentProps & AdditionalProps & { theme: Theme }>
    >
  ): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>;
}

export type CSSDefinition<D> = D | string | RecursiveCSSSelector<D | string>;

export type CSSInterpolation = InterpolationPrimitive | ArrayCSSInterpolation;

export type CSSObject = RecursiveCSSObject<CSSWithMultiValues>;

export type CSSWithMultiValues = {
  [K in keyof SystemCSSProperties]?: K extends keyof SystemProps
    ? SystemProps[K] | PropertyValue<K>
    : PropertyValue<K>;
};
export type CSSPseudos = { [K in CSS.Pseudos]?: unknown | CSSObject };

export type CSSPseudosForCSSObject = { [K in CSS.Pseudos]?: CSSObject };

export interface FilteringStyledOptions<Props, ForwardedProps extends keyof Props = keyof Props> {
  label?: string;
  shouldForwardProp?(propName: PropertyKey): propName is ForwardedProps;
  target?: string;
}

export interface FunctionCSSInterpolation {
  (theme: Theme): CSSObject;
}

export interface FunctionInterpolation<Props> {
  (props: Props): Interpolation<Props>;
}

export type Interpolation<Props> =
  | InterpolationPrimitive
  | ArrayInterpolation<Props>
  | FunctionInterpolation<Props>;

export type InterpolationPrimitive =
  | null
  | undefined
  | boolean
  | number
  | string
  | ComponentSelector
  | Keyframes
  | SerializedStyles
  | CSSObject;

export type Keyframes = {
  name: string;
  styles: string;
  anim: number;
  toString: () => string;
} & string;

export type ObjectOrArray<T, K extends keyof any = keyof any> =
  | T[]
  | Record<K, T | Record<K, T> | T[]>;

export type Prop<T> = T | ResponsiveValue<T> | ((theme: Theme) => T | ResponsiveValue<T>);

export interface Props {
  [key: string]: any;
}

export type PropsOf<C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>> =
  JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;

type PropertyValue<K extends keyof SystemCSSProperties> = ThemeThunk<
  ResponsiveValue<boolean | number | string | SystemCSSProperties[K]>
>;

type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>;

export interface RecursiveCSSSelector<D> {
  [selector: string]: CSSDefinition<D> & D;
}

export type RecursivePseudo<D> = {
  [K in keyof CSS.Pseudos]?: PseudoSelectorDefinition<D> & D;
};

export type RecursiveCSSObject<D> = D & (D | RecursivePseudo<D> | RecursiveCSSSelector<D>);

export type RequiredTheme = Required<Theme>;

export type ResponsiveArray<T> = Array<T | null>;

export interface ResponsiveObject<T> {
  [breakpoint: string]: T;
}

export type ResponsiveValue<T, ThemeType extends Theme = RequiredTheme> =
  | T
  | null
  | Array<T | null>
  | { [key in (ThemeValue<'breakpoints', ThemeType> & string) | number]?: T };

export type Scale = ObjectOrArray<number | string>;

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

export interface StyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {},
> extends React.FC<ComponentProps & SpecificComponentProps & JSXProps>,
    ComponentSelector {
  withComponent<C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
  ): StyledComponent<ComponentProps & PropsOf<C>, {}, { ref?: React.Ref<InstanceType<C>> }>;
  withComponent<C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
  ): StyledComponent<ComponentProps & PropsOf<C>>;
  withComponent<Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
  ): StyledComponent<ComponentProps, JSX.IntrinsicElements[Tag]>;
}

export interface StyledOptions<Props> {
  label?: string;
  shouldForwardProp?(propName: PropertyKey): boolean;
  target?: string;
}

export interface StyledProps {
  as?: React.ElementType;
  sx?: SystemStyleObject;
  theme?: Theme;
}

export interface SystemConfig {
  (value: string | number, scale: Scale, props: Props, cache?: Cache): any;
  defaultScale?: Scale;
  properties?: string[];
  property?: string;
  scale?: string;
  transform?: Transform;
}

export interface SystemConfigs {
  [key: string]: true | ConfigStyle;
}

export interface SystemCSSProperties
  extends CSS.Properties,
    Omit<SystemProps, keyof CSS.Properties> {}

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

export type SystemStyleObject = CSSObject | FunctionCSSInterpolation;

export interface Theme {
  borders?: ObjectOrArray<CSS.Property.Border<{}>> | undefined;
  borderStyles?: ObjectOrArray<CSS.Property.Border<{}>> | undefined;
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<TLengthStyledSystem>> | undefined;
  breakpoints?: ObjectOrArray<number | string | symbol> | undefined;
  colors?: ObjectOrArray<CSS.Property.Color> | undefined | undefined;
  fonts?: ObjectOrArray<CSS.Property.FontFamily> | undefined;
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<string | number>> | undefined;
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight> | undefined;
  letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<TLengthStyledSystem>> | undefined;
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<TLengthStyledSystem>> | undefined;
  mediaQueries?: { [size: string]: string } | undefined | undefined;
  radii?: ObjectOrArray<CSS.Property.BorderRadius<TLengthStyledSystem>> | undefined;
  shadows?: ObjectOrArray<CSS.Property.BoxShadow> | undefined;
  sizes?: ObjectOrArray<CSS.Property.Height<{}> | CSS.Property.Width<{}>> | undefined;
  space?: ObjectOrArray<CSS.Property.Margin<number | string>> | undefined;
  transitions?: ObjectOrArray<CSS.Property.Transition> | undefined;
  zIndices?: ObjectOrArray<CSS.Property.ZIndex> | undefined;
}

export type ThemeThunk<T> = T | ((theme: Theme) => T);

export type ThemeValue<
  K extends keyof ThemeType,
  ThemeType,
  TVal = any,
> = ThemeType[K] extends TVal[]
  ? number
  : ThemeType[K] extends Record<infer E, TVal>
  ? E
  : ThemeType[K] extends ObjectOrArray<infer F>
  ? F
  : never;

export interface Transform {
  (scale: Scale | undefined, path: string | number, fallback?: any, props?: any): any;
}

export type TLengthStyledSystem = string | 0 | number;
