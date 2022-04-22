import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { system } from '@styled-system/core';

export interface OtherProps {
  animation?: Token<CSS.Property.Animation>;
  appearance?: Token<CSS.Property.Appearance>;
  cursor?: Token<CSS.Property.Cursor>;
  float?: Token<CSS.Property.Float>;
  objectFit?: Token<CSS.Property.ObjectFit>;
  objectPosition?: Token<CSS.Property.ObjectPosition<Length>>;
  opacity?: Token<CSS.Property.Opacity>;
  outline?: Token<CSS.Property.Outline<Length>>;
  outlineOffset?: Token<CSS.Property.OutlineOffset<Length>>;
  overflowWrap?: Token<CSS.Property.OverflowWrap>;
  pointerEvents?: Token<CSS.Property.PointerEvents>;
  resize?: Token<CSS.Property.Resize>;
  transform?: Token<CSS.Property.Transform>;
  transformOrigin?: Token<CSS.Property.TransformOrigin<Length>>;
  userSelect?: Token<CSS.Property.UserSelect>;
  visibility?: Token<CSS.Property.Visibility>;
  willChange?: Token<CSS.Property.WillChange>;
}

const config: Config<OtherProps> = {
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
