import * as CSS from 'csstype';
import {
  RequiredTheme,
  ResponsiveValue,
  SystemConfigs,
  Theme,
  TLengthStyledSystem,
} from '../types';
import { system } from '../core';

export interface OtherProps<ThemeType extends Theme = RequiredTheme> {
  animation?: ResponsiveValue<CSS.Property.Animation, ThemeType>;
  appearance?: ResponsiveValue<CSS.Property.Appearance, ThemeType>;
  cursor?: ResponsiveValue<CSS.Property.Cursor, ThemeType>;
  float?: ResponsiveValue<CSS.Property.Float, ThemeType>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit, ThemeType>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition<TLengthStyledSystem>, ThemeType>;
  opacity?: ResponsiveValue<CSS.Property.Opacity, ThemeType>;
  outline?: ResponsiveValue<CSS.Property.Outline<TLengthStyledSystem>, ThemeType>;
  outlineOffset?: ResponsiveValue<CSS.Property.OutlineOffset<TLengthStyledSystem>, ThemeType>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap, ThemeType>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents, ThemeType>;
  resize?: ResponsiveValue<CSS.Property.Resize, ThemeType>;
  transform?: ResponsiveValue<CSS.Property.Transform, ThemeType>;
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin<TLengthStyledSystem>, ThemeType>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect, ThemeType>;
  visibility?: ResponsiveValue<CSS.Property.Visibility, ThemeType>;
  willChange?: ResponsiveValue<CSS.Property.WillChange, ThemeType>;
}

const config: SystemConfigs = {
  animation: true,
  appearance: true,
  cursor: true,
  float: true,
  objectFit: true,
  objectPosition: true,
  opacity: true,
  outline: true,
  outlineOffset: true,
  overflowWrap: true,
  pointerEvents: true,
  resize: true,
  transform: true,
  transformOrigin: true,
  userSelect: true,
  visibility: true,
  willChange: true,
};

export const other = system(config);
