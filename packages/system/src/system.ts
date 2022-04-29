import * as CSS from 'csstype';
import { ConfigStyle, ResponsiveValue, TLengthStyledSystem } from 'styled-system';

export interface OtherProps {
  animation?: ResponsiveValue<CSS.Property.Animation>;
  appearance?: ResponsiveValue<CSS.Property.Appearance>;
  cursor?: ResponsiveValue<CSS.Property.Cursor>;
  fill?: ResponsiveValue<CSS.Property.Color>;
  float?: ResponsiveValue<CSS.Property.Float>;
  objectFit?: ResponsiveValue<CSS.Property.ObjectFit>;
  objectPosition?: ResponsiveValue<CSS.Property.ObjectPosition<TLengthStyledSystem>>;
  opacity?: ResponsiveValue<CSS.Property.Opacity>;
  outline?: ResponsiveValue<CSS.Property.Outline<TLengthStyledSystem>>;
  outlineOffset?: ResponsiveValue<CSS.Property.OutlineOffset<TLengthStyledSystem>>;
  overflowWrap?: ResponsiveValue<CSS.Property.OverflowWrap>;
  pointerEvents?: ResponsiveValue<CSS.Property.PointerEvents>;
  resize?: ResponsiveValue<CSS.Property.Resize>;
  stroke?: ResponsiveValue<CSS.Property.Color>;
  transform?: ResponsiveValue<CSS.Property.Transform>;
  transformOrigin?: ResponsiveValue<CSS.Property.TransformOrigin<TLengthStyledSystem>>;
  transition?: ResponsiveValue<CSS.Property.Transition>;
  transitionProperty?: ResponsiveValue<CSS.Property.TransitionProperty>;
  transitionDuration?: ResponsiveValue<CSS.Property.TransitionDuration>;
  transitionTimingFunction?: ResponsiveValue<CSS.Property.TransitionTimingFunction>;
  transitionDelay?: ResponsiveValue<CSS.Property.TransitionDelay>;
  userSelect?: ResponsiveValue<CSS.Property.UserSelect>;
  visibility?: ResponsiveValue<CSS.Property.Visibility>;
  willChange?: ResponsiveValue<CSS.Property.WillChange>;
}

const config: Record<keyof OtherProps, boolean | ConfigStyle> = {
  animation: true,
  appearance: true,
  cursor: true,
  fill: {
    property: 'fill' as const,
    scale: 'colors',
  },
  float: true,
  objectFit: true,
  objectPosition: true,
  opacity: true,
  outline: true,
  outlineOffset: true,
  overflowWrap: true,
  pointerEvents: true,
  resize: true,
  stroke: {
    property: 'stroke' as const,
    scale: 'colors',
  },
  transform: true,
  transformOrigin: true,
  transition: true,
  transitionDelay: true,
  transitionDuration: {
    property: 'transitionDuration',
    scale: 'transitions.duration',
  },
  transitionProperty: {
    property: 'transitionProperty',
    scale: 'transitions.property',
  },
  transitionTimingFunction: {
    property: 'transitionTimingFunction',
    scale: 'transitions.timingFunction',
  },
  userSelect: true,
  visibility: true,
  willChange: true,
};
