import * as CSS from 'csstype';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import { ResponsiveValue } from 'styled-system';

export interface OtherProps {
  animation?: ResponsiveValue<CSS.Property.Animation>;
  appearance?: ResponsiveValue<CSS.Property.Appearance>;
  cursor?: ResponsiveValue<CSS.Property.Cursor>;
  fill?: StyleProps['color'];
  float?: ResponsiveValue<CSS.Property.Float>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition<string | 0 | number>>;
  outline?: ResponsiveValue<CSS.Property.Outline<string | 0 | number>>;
  outlineOffset?: ResponsiveValue<CSS.Property.OutlineOffset<string | 0 | number>>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>;
  resize?: ResponsiveValue<CSS.Property.Resize>;
  stroke?: StyleProps['color'];
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>;
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>;
  transform?: ResponsiveValue<CSS.Property.Transform>;
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin<string | 0 | number>>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>;
  visibility?: ResponsiveValue<CSS.Property.Visibility>;
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace>;
  willChange?: ResponsiveValue<CSS.Property.WillChange>;
}

export type StyleProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps &
  OtherProps;
