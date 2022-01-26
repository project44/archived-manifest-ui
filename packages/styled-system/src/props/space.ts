import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue, Scale } from '../types';
import get from 'lodash.get';
import isNumber from 'lodash/isNumber';
import { system } from '../core';

export interface SpaceProps {
  m?: ResponsiveValue<CSS.Property.Margin<Length>>;
  margin?: ResponsiveValue<CSS.Property.Margin<Length>>;
  mt?: ResponsiveValue<CSS.Property.MarginTop<Length>>;
  marginTop?: ResponsiveValue<CSS.Property.MarginTop<Length>>;
  mr?: ResponsiveValue<CSS.Property.MarginRight<Length>>;
  marginRight?: ResponsiveValue<CSS.Property.MarginRight<Length>>;
  mb?: ResponsiveValue<CSS.Property.MarginBottom<Length>>;
  marginBottom?: ResponsiveValue<CSS.Property.MarginBottom<Length>>;
  ml?: ResponsiveValue<CSS.Property.MarginLeft<Length>>;
  marginLeft?: ResponsiveValue<CSS.Property.MarginLeft<Length>>;
  mx?: ResponsiveValue<CSS.Property.Margin<Length>>;
  marginX?: ResponsiveValue<CSS.Property.Margin<Length>>;
  my?: ResponsiveValue<CSS.Property.Margin<Length>>;
  marginY?: ResponsiveValue<CSS.Property.Margin<Length>>;
  marginBlockStart?: ResponsiveValue<CSS.Property.MarginBlockStart<Length>>;
  marginBlockEnd?: ResponsiveValue<CSS.Property.MarginBlockEnd<Length>>;
  marginInlineStart?: ResponsiveValue<CSS.Property.MarginInlineStart<Length>>;
  marginStart?: ResponsiveValue<CSS.Property.MarginInlineStart<Length>>;
  ms?: ResponsiveValue<CSS.Property.MarginInlineStart<Length>>;
  marginInlineEnd?: ResponsiveValue<CSS.Property.MarginInlineEnd<Length>>;
  marginEnd?: ResponsiveValue<CSS.Property.MarginInlineEnd<Length>>;
  me?: ResponsiveValue<CSS.Property.MarginInlineEnd<Length>>;
  p?: ResponsiveValue<CSS.Property.Padding<Length>>;
  padding?: ResponsiveValue<CSS.Property.Padding<Length>>;
  pt?: ResponsiveValue<CSS.Property.PaddingTop<Length>>;
  paddingTop?: ResponsiveValue<CSS.Property.PaddingTop<Length>>;
  pr?: ResponsiveValue<CSS.Property.PaddingRight<Length>>;
  paddingRight?: ResponsiveValue<CSS.Property.PaddingRight<Length>>;
  pb?: ResponsiveValue<CSS.Property.PaddingBottom<Length>>;
  paddingBottom?: ResponsiveValue<CSS.Property.PaddingBottom<Length>>;
  pl?: ResponsiveValue<CSS.Property.PaddingLeft<Length>>;
  paddingLeft?: ResponsiveValue<CSS.Property.PaddingLeft<Length>>;
  px?: ResponsiveValue<CSS.Property.Padding<Length>>;
  paddingX?: ResponsiveValue<CSS.Property.Padding<Length>>;
  py?: ResponsiveValue<CSS.Property.Padding<Length>>;
  paddingY?: ResponsiveValue<CSS.Property.Padding<Length>>;
  paddingBlockStart?: ResponsiveValue<CSS.Property.PaddingBlockStart<Length>>;
  paddingBlockEnd?: ResponsiveValue<CSS.Property.PaddingBlockEnd<Length>>;
  paddingInlineStart?: ResponsiveValue<CSS.Property.PaddingInlineStart<Length>>;
  paddingStart?: ResponsiveValue<CSS.Property.PaddingInlineStart<Length>>;
  ps?: ResponsiveValue<CSS.Property.PaddingInlineStart<Length>>;
  paddingInlineEnd?: ResponsiveValue<CSS.Property.PaddingInlineEnd<Length>>;
  paddingEnd?: ResponsiveValue<CSS.Property.PaddingInlineEnd<Length>>;
  pe?: ResponsiveValue<CSS.Property.PaddingInlineEnd<Length>>;
}

function getMargin(scale?: Scale, path?: any): any {
  if (!isNumber(path)) {
    return get(scale, path, path);
  }

  const isNegative = path < 0;
  const absolute = Math.abs(path);
  const value = get(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? `-${String(value)}` : value;
  }

  return value * (isNegative ? -1 : 1);
}

const config: Configs = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
  },
  marginBlockStart: {
    property: 'marginBlockStart',
    scale: 'space',
    transform: getMargin,
  },
  marginBlockEnd: {
    property: 'marginBlockEnd',
    scale: 'space',
    transform: getMargin,
  },
  marginInline: {
    property: 'marginInline',
    scale: 'space',
    transform: getMargin,
  },
  marginInlineStart: {
    property: 'marginInlineStart',
    scale: 'space',
    transform: getMargin,
  },
  marginInlineEnd: {
    property: 'marginInlineEnd',
    scale: 'space',
    transform: getMargin,
  },
  padding: {
    property: 'padding',
    scale: 'space',
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
  },
  paddingBlockStart: {
    property: 'paddingBlockStart',
    scale: 'space',
  },
  paddingBlockEnd: {
    property: 'paddingBlockEnd',
    scale: 'space',
  },
  paddingInline: {
    property: 'paddingInline',
    scale: 'space',
  },
  paddingInlineStart: {
    property: 'paddingInlineStart',
    scale: 'space',
  },
  paddingInlineEnd: {
    property: 'paddingInlineEnd',
    scale: 'space',
  },
};

config.m = config.margin;
config.mt = config.marginTop;
config.mr = config.marginRight;
config.mb = config.marginBottom;
config.ml = config.marginLeft;
config.mx = config.marginX;
config.my = config.marginY;
config.me = config.marginInlineEnd;
config.ms = config.marginInlineStart;
config.marginEnd = config.marginInlineEnd;
config.marginStart = config.marginInlineStart;
config.p = config.padding;
config.pt = config.paddingTop;
config.pb = config.paddingBottom;
config.pl = config.paddingLeft;
config.pr = config.paddingRight;
config.py = config.paddingY;
config.px = config.paddingX;
config.pe = config.paddingInlineEnd;
config.ps = config.paddingInlineStart;
config.paddingEnd = config.paddingInlineEnd;
config.paddingStart = config.paddingInlineStart;

export const space = system(config);
