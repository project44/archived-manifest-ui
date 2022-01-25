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
import { ObjectOrArray, TLengthStyledSystem } from 'styled-system';

export { SystemStyleObject } from '@styled-system/css';

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
  borders?: ObjectOrArray<CSS.Property.Border<{}>> | undefined;
  borderStyles?: ObjectOrArray<CSS.Property.Border<{}>> | undefined;
  borderWidths?: ObjectOrArray<CSS.Property.BorderWidth<TLength>> | undefined;
  breakpoints?: ObjectOrArray<number | string | symbol> | undefined;
  fontSizes?: ObjectOrArray<CSS.Property.FontSize<number>> | undefined;
  colors?: ObjectOrArray<CSS.Property.Color> | undefined;
  fonts?: ObjectOrArray<CSS.Property.FontFamily> | undefined;
  fontWeights?: ObjectOrArray<CSS.Property.FontWeight> | undefined;
  lineHeights?: ObjectOrArray<CSS.Property.LineHeight<TLength>> | undefined;
  letterSpacings?: ObjectOrArray<CSS.Property.LetterSpacing<TLength>> | undefined;
  mediaQueries?: { [size: string]: string } | undefined;
  radii?: ObjectOrArray<CSS.Property.BorderRadius<TLength>> | undefined;
  shadows?: ObjectOrArray<CSS.Property.BoxShadow> | undefined;
  sizes?: ObjectOrArray<CSS.Property.Height<{}> | CSS.Property.Width<{}>> | undefined;
  space?: ObjectOrArray<CSS.Property.Margin<number | string>> | undefined;
  zIndices?: ObjectOrArray<CSS.Property.ZIndex> | undefined;
}
