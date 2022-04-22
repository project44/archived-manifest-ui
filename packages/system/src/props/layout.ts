import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { system } from '@styled-system/core';

export interface LayoutProps {
  boxSize?: Token<CSS.Property.Width<Length>>;
  boxSizing?: CSS.Property.BoxSizing;
  width?: Token<CSS.Property.Width<Length>>;
  w?: Token<CSS.Property.Width<Length>>;
  height?: Token<CSS.Property.Height<Length>>;
  h?: Token<CSS.Property.Height<Length>>;
  minWidth?: Token<CSS.Property.MinWidth<Length>>;
  minW?: Token<CSS.Property.MinWidth<Length>>;
  maxWidth?: Token<CSS.Property.MaxWidth<Length>>;
  maxW?: Token<CSS.Property.MaxWidth<Length>>;
  minHeight?: Token<CSS.Property.MinHeight<Length>>;
  minH?: Token<CSS.Property.MinHeight<Length>>;
  maxHeight?: Token<CSS.Property.MaxHeight<Length>>;
  maxH?: Token<CSS.Property.MaxHeight<Length>>;
  display?: Token<CSS.Property.Display>;
  d?: Token<CSS.Property.Display>;
  verticalAlign?: Token<CSS.Property.VerticalAlign<Length>>;
  overflow?: Token<CSS.Property.Overflow>;
  overflowX?: Token<CSS.Property.OverflowX>;
  overflowY?: Token<CSS.Property.OverflowY>;
}

const config: Config<LayoutProps> = {
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  boxSizing: true,
  d: {
    property: 'display',
  },
  display: true,
  h: {
    property: 'height',
    scale: 'sizes',
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  verticalAlign: true,
  w: {
    property: 'width',
    scale: 'sizes',
  },
  width: {
    property: 'width',
    scale: 'sizes',
  },
};

export const layout = system(config);
