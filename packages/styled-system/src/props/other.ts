import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue } from '../types';
import { system } from '../core';

export interface OtherProps {
  appearance?: ResponsiveValue<CSS.Property.Appearance>;
  visibility?: ResponsiveValue<CSS.Property.Visibility>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap>;
  cursor?: ResponsiveValue<CSS.Property.Cursor>;
  resize?: ResponsiveValue<CSS.Property.Resize>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition<Length>>;
  float?: ResponsiveValue<CSS.Property.Float>;
  outline?: ResponsiveValue<CSS.Property.Outline<Length>>;
  outlineOffset?: ResponsiveValue<CSS.Property.OutlineOffset<Length>>;
  transform?: ResponsiveValue<CSS.Property.Transform>;
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin<Length>>;
}

const config: Configs = {
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
