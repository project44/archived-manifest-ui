import { get, isNumber } from '../utils';
import { RequiredTheme, ResponsiveValue, Scale, SystemConfigs, Theme, ThemeValue } from '../types';
import { system } from '../core';

export interface SpaceProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'space', ThemeType>,
> {
  m?: ResponsiveValue<TVal, ThemeType>;
  margin?: ResponsiveValue<TVal, ThemeType>;
  mt?: ResponsiveValue<TVal, ThemeType>;
  marginTop?: ResponsiveValue<TVal, ThemeType>;
  mr?: ResponsiveValue<TVal, ThemeType>;
  marginRight?: ResponsiveValue<TVal, ThemeType>;
  mb?: ResponsiveValue<TVal, ThemeType>;
  marginBottom?: ResponsiveValue<TVal, ThemeType>;
  ml?: ResponsiveValue<TVal, ThemeType>;
  marginLeft?: ResponsiveValue<TVal, ThemeType>;
  mx?: ResponsiveValue<TVal, ThemeType>;
  marginX?: ResponsiveValue<TVal, ThemeType>;
  my?: ResponsiveValue<TVal, ThemeType>;
  marginY?: ResponsiveValue<TVal, ThemeType>;
  marginBlockStart?: ResponsiveValue<TVal, ThemeType>;
  marginBlockEnd?: ResponsiveValue<TVal, ThemeType>;
  marginInlineStart?: ResponsiveValue<TVal, ThemeType>;
  marginStart?: ResponsiveValue<TVal, ThemeType>;
  ms?: ResponsiveValue<TVal, ThemeType>;
  marginInlineEnd?: ResponsiveValue<TVal, ThemeType>;
  marginEnd?: ResponsiveValue<TVal, ThemeType>;
  me?: ResponsiveValue<TVal, ThemeType>;
  p?: ResponsiveValue<TVal, ThemeType>;
  padding?: ResponsiveValue<TVal, ThemeType>;
  pt?: ResponsiveValue<TVal, ThemeType>;
  paddingTop?: ResponsiveValue<TVal, ThemeType>;
  pr?: ResponsiveValue<TVal, ThemeType>;
  paddingRight?: ResponsiveValue<TVal, ThemeType>;
  pb?: ResponsiveValue<TVal, ThemeType>;
  paddingBottom?: ResponsiveValue<TVal, ThemeType>;
  pl?: ResponsiveValue<TVal, ThemeType>;
  paddingLeft?: ResponsiveValue<TVal, ThemeType>;
  px?: ResponsiveValue<TVal, ThemeType>;
  paddingX?: ResponsiveValue<TVal, ThemeType>;
  py?: ResponsiveValue<TVal, ThemeType>;
  paddingY?: ResponsiveValue<TVal, ThemeType>;
  paddingBlockStart?: ResponsiveValue<TVal, ThemeType>;
  paddingBlockEnd?: ResponsiveValue<TVal, ThemeType>;
  paddingInlineStart?: ResponsiveValue<TVal, ThemeType>;
  paddingStart?: ResponsiveValue<TVal, ThemeType>;
  ps?: ResponsiveValue<TVal, ThemeType>;
  paddingInlineEnd?: ResponsiveValue<TVal, ThemeType>;
  paddingEnd?: ResponsiveValue<TVal, ThemeType>;
  pe?: ResponsiveValue<TVal, ThemeType>;
}

const getMargin = (scale: Scale | undefined, path: number | string): any => {
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
};

const config: SystemConfigs = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
  },
  marginBlockEnd: {
    property: 'marginBlockEnd',
    scale: 'space',
    transform: getMargin,
  },
  marginBlockStart: {
    property: 'marginBlockStart',
    scale: 'space',
    transform: getMargin,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
  },
  marginInline: {
    property: 'marginInline',
    scale: 'space',
    transform: getMargin,
  },
  marginInlineEnd: {
    property: 'marginInlineEnd',
    scale: 'space',
    transform: getMargin,
  },
  marginInlineStart: {
    property: 'marginInlineStart',
    scale: 'space',
    transform: getMargin,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
  },
  marginTop: {
    property: 'marginTop',
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
  padding: {
    property: 'padding',
    scale: 'space',
  },
  paddingBlockEnd: {
    property: 'paddingBlockEnd',
    scale: 'space',
  },
  paddingBlockStart: {
    property: 'paddingBlockStart',
    scale: 'space',
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
  },
  paddingInline: {
    property: 'paddingInline',
    scale: 'space',
  },
  paddingInlineEnd: {
    property: 'paddingInlineEnd',
    scale: 'space',
  },
  paddingInlineStart: {
    property: 'paddingInlineStart',
    scale: 'space',
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
  },
  paddingTop: {
    property: 'paddingTop',
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
