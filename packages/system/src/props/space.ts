import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { positiveOrNegative } from '../transforms';
import { system } from '@styled-system/core';

export interface SpaceProps {
  m?: Token<CSS.Property.Margin<Length>>;
  margin?: Token<CSS.Property.Margin<Length>>;
  mt?: Token<CSS.Property.MarginTop<Length>>;
  marginTop?: Token<CSS.Property.MarginTop<Length>>;
  mr?: Token<CSS.Property.MarginRight<Length>>;
  marginRight?: Token<CSS.Property.MarginRight<Length>>;
  mb?: Token<CSS.Property.MarginBottom<Length>>;
  marginBottom?: Token<CSS.Property.MarginBottom<Length>>;
  ml?: Token<CSS.Property.MarginLeft<Length>>;
  marginLeft?: Token<CSS.Property.MarginLeft<Length>>;
  mx?: Token<CSS.Property.Margin<Length>>;
  marginX?: Token<CSS.Property.Margin<Length>>;
  my?: Token<CSS.Property.Margin<Length>>;
  marginY?: Token<CSS.Property.Margin<Length>>;
  marginBlockStart?: Token<CSS.Property.MarginBlockStart<Length>>;
  marginBlockEnd?: Token<CSS.Property.MarginBlockEnd<Length>>;
  marginInline?: Token<CSS.Property.MarginInline<Length>>;
  marginInlineStart?: Token<CSS.Property.MarginInlineStart<Length>>;
  ms?: Token<CSS.Property.MarginInlineStart<Length>>;
  marginInlineEnd?: Token<CSS.Property.MarginInlineEnd<Length>>;
  me?: Token<CSS.Property.MarginInlineEnd<Length>>;
  p?: Token<CSS.Property.Padding<Length>>;
  padding?: Token<CSS.Property.Padding<Length>>;
  pt?: Token<CSS.Property.PaddingTop<Length>>;
  paddingTop?: Token<CSS.Property.PaddingTop<Length>>;
  pr?: Token<CSS.Property.PaddingRight<Length>>;
  paddingRight?: Token<CSS.Property.PaddingRight<Length>>;
  pb?: Token<CSS.Property.PaddingBottom<Length>>;
  paddingBottom?: Token<CSS.Property.PaddingBottom<Length>>;
  pl?: Token<CSS.Property.PaddingLeft<Length>>;
  paddingLeft?: Token<CSS.Property.PaddingLeft<Length>>;
  px?: Token<CSS.Property.Padding<Length>>;
  paddingX?: Token<CSS.Property.Padding<Length>>;
  py?: Token<CSS.Property.Padding<Length>>;
  paddingY?: Token<CSS.Property.Padding<Length>>;
  paddingBlockStart?: Token<CSS.Property.PaddingBlockStart<Length>>;
  paddingBlockEnd?: Token<CSS.Property.PaddingBlockEnd<Length>>;
  paddingInline?: Token<CSS.Property.PaddingInline<Length>>;
  paddingInlineStart?: Token<CSS.Property.PaddingInlineStart<Length>>;
  ps?: Token<CSS.Property.PaddingInlineStart<Length>>;
  paddingInlineEnd?: Token<CSS.Property.PaddingInlineEnd<Length>>;
  pe?: Token<CSS.Property.PaddingInlineEnd<Length>>;
}

const config: Config<SpaceProps> = {
  m: {
    property: 'margin',
    scale: 'space',
    transform: positiveOrNegative,
  },
  margin: {
    property: 'margin',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginBlockEnd: {
    property: 'marginBlockEnd',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginBlockStart: {
    property: 'marginBlockStart',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginInline: {
    property: 'marginInline',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginInlineEnd: {
    property: 'marginInlineEnd',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginInlineStart: {
    property: 'marginInlineStart',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: positiveOrNegative,
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: positiveOrNegative,
  },
  mb: {
    property: 'marginBottom',
    scale: 'space',
  },
  me: {
    property: 'marginInlineEnd',
    scale: 'space',
  },
  ml: {
    property: 'marginLeft',
    scale: 'space',
  },
  mr: {
    property: 'marginRight',
    scale: 'space',
  },
  ms: {
    property: 'marginInlineStart',
    scale: 'space',
  },
  mt: {
    property: 'marginTop',
    scale: 'space',
  },
  mx: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
  },
  p: {
    property: 'padding',
    scale: 'space',
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
  pb: {
    property: 'paddingBottom',
    scale: 'space',
  },
  pe: {
    property: 'paddingInlineEnd',
    scale: 'space',
  },
  pl: {
    property: 'paddingLeft',
    scale: 'space',
  },
  pr: {
    property: 'paddingRight',
    scale: 'space',
  },
  ps: {
    property: 'paddingInlineStart',
    scale: 'space',
  },
  pt: {
    property: 'paddingTop',
    scale: 'space',
  },
  px: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
  },
};

export const space = system(config);
