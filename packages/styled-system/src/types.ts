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
  TypographyProps,
} from './props';
import { ObjectOrArray, ResponsiveValue, TLengthStyledSystem } from 'styled-system';

export { SystemStyleObject } from '@styled-system/css';

export { ObjectOrArray, ResponsiveValue };

export type RequiredTheme = Required<Theme>;

export type StyleProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  OtherProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps;

export interface Theme<TLength = TLengthStyledSystem> {
  borders?: ObjectOrArray<CSS.Property.Border<{}>>;
  borderStyles?: ObjectOrArray<CSS.Property.Border<{}>>;
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<TLength>>;
  breakpoints?: ObjectOrArray<number | string | symbol>;
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<number>>;
  colors?: ObjectOrArray<CSS.Property.Color>;
  fonts?: ObjectOrArray<CSS.Property.FontFamily>;
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight>;
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<TLength>>;
  letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<TLength>>;
  mediaQueries?: { [size: string]: string };
  radii?: ObjectOrArray<CSS.Property.BorderRadius<TLength>>;
  shadows?: ObjectOrArray<CSS.Property.BoxShadow>;
  sizes?: ObjectOrArray<CSS.Property.Height<{}> | CSS.Property.Width<{}>>;
  space?: ObjectOrArray<CSS.Property.Margin<number | string>>;
  transitions?: {
    duration: ObjectOrArray<CSS.Property.TransitionDuration<{}>>;
    property: ObjectOrArray<CSS.Property.TransitionProperty>;
    timingFunction: ObjectOrArray<CSS.Property.TransitionTimingFunction>;
  };
  zIndices?: ObjectOrArray<CSS.Property.ZIndex>;
}
