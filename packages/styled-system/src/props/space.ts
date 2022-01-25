import * as CSS from 'csstype';
import { Config, get, ResponsiveValue, Scale, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';
import isNumber from 'lodash.isnumber';

export interface SpaceProps<ThemeType extends Theme = RequiredTheme> {
  m?: ResponsiveValue<CSS.Property.Margin<TLengthStyledSystem>, ThemeType>;
  margin?: ResponsiveValue<CSS.Property.Margin<TLengthStyledSystem>, ThemeType>;

  mt?: ResponsiveValue<CSS.Property.MarginTop<TLengthStyledSystem>, ThemeType>;
  marginTop?: ResponsiveValue<CSS.Property.MarginTop<TLengthStyledSystem>, ThemeType>;

  mr?: ResponsiveValue<CSS.Property.MarginRight<TLengthStyledSystem>, ThemeType>;
  marginRight?: ResponsiveValue<CSS.Property.MarginRight<TLengthStyledSystem>, ThemeType>;

  mb?: ResponsiveValue<CSS.Property.MarginBottom<TLengthStyledSystem>, ThemeType>;
  marginBottom?: ResponsiveValue<CSS.Property.MarginBottom<TLengthStyledSystem>, ThemeType>;

  ml?: ResponsiveValue<CSS.Property.MarginLeft<TLengthStyledSystem>, ThemeType>;
  marginLeft?: ResponsiveValue<CSS.Property.MarginLeft<TLengthStyledSystem>, ThemeType>;

  mx?: ResponsiveValue<CSS.Property.Margin<TLengthStyledSystem>, ThemeType>;
  marginX?: ResponsiveValue<CSS.Property.Margin<TLengthStyledSystem>, ThemeType>;

  my?: ResponsiveValue<CSS.Property.Margin<TLengthStyledSystem>, ThemeType>;
  marginY?: ResponsiveValue<CSS.Property.Margin<TLengthStyledSystem>, ThemeType>;

  marginBlockStart?: ResponsiveValue<CSS.Property.MarginBlockStart<TLengthStyledSystem>, ThemeType>;
  marginBlockEnd?: ResponsiveValue<CSS.Property.MarginBlockEnd<TLengthStyledSystem>, ThemeType>;

  marginInlineStart?: ResponsiveValue<
    CSS.Property.MarginInlineStart<TLengthStyledSystem>,
    ThemeType
  >;
  marginStart?: ResponsiveValue<CSS.Property.MarginInlineStart<TLengthStyledSystem>, ThemeType>;
  ms?: ResponsiveValue<CSS.Property.MarginInlineStart<TLengthStyledSystem>, ThemeType>;

  marginInlineEnd?: ResponsiveValue<CSS.Property.MarginInlineEnd<TLengthStyledSystem>, ThemeType>;
  marginEnd?: ResponsiveValue<CSS.Property.MarginInlineEnd<TLengthStyledSystem>, ThemeType>;
  me?: ResponsiveValue<CSS.Property.MarginInlineEnd<TLengthStyledSystem>, ThemeType>;

  p?: ResponsiveValue<CSS.Property.Padding<TLengthStyledSystem>, ThemeType>;
  padding?: ResponsiveValue<CSS.Property.Padding<TLengthStyledSystem>, ThemeType>;

  pt?: ResponsiveValue<CSS.Property.PaddingTop<TLengthStyledSystem>, ThemeType>;
  paddingTop?: ResponsiveValue<CSS.Property.PaddingTop<TLengthStyledSystem>, ThemeType>;

  pr?: ResponsiveValue<CSS.Property.PaddingRight<TLengthStyledSystem>, ThemeType>;
  paddingRight?: ResponsiveValue<CSS.Property.PaddingRight<TLengthStyledSystem>, ThemeType>;

  pb?: ResponsiveValue<CSS.Property.PaddingBottom<TLengthStyledSystem>, ThemeType>;
  paddingBottom?: ResponsiveValue<CSS.Property.PaddingBottom<TLengthStyledSystem>, ThemeType>;

  pl?: ResponsiveValue<CSS.Property.PaddingLeft<TLengthStyledSystem>, ThemeType>;
  paddingLeft?: ResponsiveValue<CSS.Property.PaddingLeft<TLengthStyledSystem>, ThemeType>;

  px?: ResponsiveValue<CSS.Property.Padding<TLengthStyledSystem>, ThemeType>;
  paddingX?: ResponsiveValue<CSS.Property.Padding<TLengthStyledSystem>, ThemeType>;

  py?: ResponsiveValue<CSS.Property.Padding<TLengthStyledSystem>, ThemeType>;
  paddingY?: ResponsiveValue<CSS.Property.Padding<TLengthStyledSystem>, ThemeType>;

  paddingBlockStart?: ResponsiveValue<
    CSS.Property.PaddingBlockStart<TLengthStyledSystem>,
    ThemeType
  >;
  paddingBlockEnd?: ResponsiveValue<CSS.Property.PaddingBlockEnd<TLengthStyledSystem>, ThemeType>;

  paddingInlineStart?: ResponsiveValue<
    CSS.Property.PaddingInlineStart<TLengthStyledSystem>,
    ThemeType
  >;
  paddingStart?: ResponsiveValue<CSS.Property.PaddingInlineStart<TLengthStyledSystem>, ThemeType>;
  ps?: ResponsiveValue<CSS.Property.PaddingInlineStart<TLengthStyledSystem>, ThemeType>;

  paddingInlineEnd?: ResponsiveValue<CSS.Property.PaddingInlineEnd<TLengthStyledSystem>, ThemeType>;
  paddingEnd?: ResponsiveValue<CSS.Property.PaddingInlineEnd<TLengthStyledSystem>, ThemeType>;
  pe?: ResponsiveValue<CSS.Property.PaddingInlineEnd<TLengthStyledSystem>, ThemeType>;
}

const getMargin = (n: number, scale?: Scale) => {
  if (!isNumber(n)) {
    return get(scale, n, n) as string;
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = get(scale, absolute, absolute);

  if (!isNumber(value)) {
    return (isNegative ? `-${String(value)}` : value) as string;
  }

  return value * (isNegative ? -1 : 1);
};

const config: Config = {
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
