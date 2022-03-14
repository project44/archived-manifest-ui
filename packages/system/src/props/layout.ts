import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue } from '../types';
import { system } from '../core';

export interface LayoutProps {
  boxSize?: ResponsiveValue<CSS.Property.Width<Length>>;
  boxSizing?: CSS.Property.BoxSizing;
  width?: ResponsiveValue<CSS.Property.Width<Length>>;
  w?: ResponsiveValue<CSS.Property.Width<Length>>;
  height?: ResponsiveValue<CSS.Property.Height<Length>>;
  h?: ResponsiveValue<CSS.Property.Height<Length>>;
  minWidth?: ResponsiveValue<CSS.Property.MinWidth<Length>>;
  minW?: ResponsiveValue<CSS.Property.MinWidth<Length>>;
  maxWidth?: ResponsiveValue<CSS.Property.MaxWidth<Length>>;
  maxW?: ResponsiveValue<CSS.Property.MaxWidth<Length>>;
  minHeight?: ResponsiveValue<CSS.Property.MinHeight<Length>>;
  minH?: ResponsiveValue<CSS.Property.MinHeight<Length>>;
  maxHeight?: ResponsiveValue<CSS.Property.MaxHeight<Length>>;
  maxH?: ResponsiveValue<CSS.Property.MaxHeight<Length>>;
  display?: ResponsiveValue<CSS.Property.Display>;
  d?: ResponsiveValue<CSS.Property.Display>;
  verticalAlign?: ResponsiveValue<CSS.Property.VerticalAlign<Length>>;
  overflow?: ResponsiveValue<CSS.Property.Overflow>;
  overflowX?: ResponsiveValue<CSS.Property.OverflowX>;
  overflowY?: ResponsiveValue<CSS.Property.OverflowY>;
}

const config: Configs = {
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  width: {
    property: 'width',
    scale: 'sizes',
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  boxSizing: true,
  display: true,
  verticalAlign: true,
  overflow: true,
  overflowX: true,
  overflowY: true,
};

config.w = config.width;
config.h = config.height;
config.minW = config.minWidth;
config.maxW = config.maxWidth;
config.minH = config.minHeight;
config.maxH = config.maxHeight;
config.d = config.display;

export const layout = system(config);
