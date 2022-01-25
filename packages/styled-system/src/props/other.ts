import * as CSS from 'csstype';
import { Config, ResponsiveValue, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

export interface OtherProps<ThemeType extends Theme = RequiredTheme> {
  appearance?: ResponsiveValue<CSS.Property.Appearance, ThemeType>;
  visibility?: ResponsiveValue<CSS.Property.Visibility, ThemeType>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect, ThemeType>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents, ThemeType>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap, ThemeType>;
  cursor?: ResponsiveValue<CSS.Property.Cursor, ThemeType>;
  resize?: ResponsiveValue<CSS.Property.Resize, ThemeType>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit, ThemeType>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition<TLengthStyledSystem>, ThemeType>;
  float?: ResponsiveValue<CSS.Property.Float, ThemeType>;
  outline?: ResponsiveValue<CSS.Property.Outline<TLengthStyledSystem>, ThemeType>;
  outlineOffset?: ResponsiveValue<CSS.Property.OutlineOffset<TLengthStyledSystem>, ThemeType>;
  transform?: ResponsiveValue<CSS.Property.Transform, ThemeType>;
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin<TLengthStyledSystem>, ThemeType>;
}

const config: Config = {
  animation: true,
  appearance: true,
  visibility: true,
  userSelect: true,
  pointerEvents: true,
  cursor: true,
  resize: true,
  objectFit: true,
  objectPosition: true,
  float: true,
  willChange: true,
  outline: true,
  outlineOffset: true,
  transform: true,
  transformOrigin: true,
};

export const other = system(config);
