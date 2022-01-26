import { CSSObject, SystemStyleObject, Theme } from '@manifest-ui/styled-system';
import { PropsOf } from '@emotion/react';

export type PropsWithoutRef<P> = P extends any
  ? 'ref' extends keyof P
    ? Pick<P, Exclude<keyof P, 'ref'>>
    : P
  : P;

export type ComponentProps<T extends React.ElementType> = PropsWithoutRef<React.ComponentProps<T>>;

export type ArrayInterpolation<Props> = Array<Interpolation<Props>>;

export interface FunctionInterpolation<Props> {
  (props: Props): Interpolation<Props>;
}

// -------------------------------------------------------------------------------- //
// Override emotions styled api types to support our custom theme and styled props //
// ------------------------------------------------------------------------------ //

export interface ComponentSelector {
  __emotion_styles: any;
}

/**
 * @desc
 * This function accepts a React component or tag ('div', 'a' etc).
 *
 * @example styled(MyComponent)({ width: 100 })
 * @example styled(MyComponent)(myComponentProps => ({ width: myComponentProps.width })
 * @example styled('div')({ width: 100 })
 * @example styled('div')<Props>(props => ({ width: props.width })
 */
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

/**
 * @typeparam ComponentProps  Props which will be included when withComponent is called
 * @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
 */
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

export interface FilteringStyledOptions<Props, ForwardedProps extends keyof Props = keyof Props> {
  label?: string;
  shouldForwardProp?(propName: PropertyKey): propName is ForwardedProps;
  target?: string;
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

export interface SerializedStyles {
  name: string;
  styles: string;
  map?: string;
  next?: SerializedStyles;
}

/**
 * @typeparam ComponentProps  Props which will be included when withComponent is called
 * @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
 */
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
  size?: string;
  sx?: SystemStyleObject;
  theme?: Theme;
  variant?: string;
}
