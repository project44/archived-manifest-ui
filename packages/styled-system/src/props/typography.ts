import * as CSS from 'csstype';
import { Configs, Length, ResponsiveValue } from '../types';
import { system } from '../core';

export interface TypographyProps {
  fontFamily?: ResponsiveValue<CSS.Property.FontFamily>;
  fontSize?: ResponsiveValue<CSS.Property.FontSize<Length>>;
  fontStyle?: ResponsiveValue<CSS.Property.FontStyle>;
  fontWeight?: ResponsiveValue<string | number>;
  letterSpacing?: ResponsiveValue<CSS.Property.LetterSpacing<Length>>;
  lineHeight?: ResponsiveValue<CSS.Property.LineHeight<Length>>;
  textAlign?: ResponsiveValue<CSS.Property.TextAlign>;
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration>;
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow>;
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>;
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace>;
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak>;
}

const config: Configs = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts',
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
  },
  fontStyle: true,
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings',
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights',
  },
  textAlign: true,
  textDecoration: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  wordBreak: true,
};

export const typography = system(config);
