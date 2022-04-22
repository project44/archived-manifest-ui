import * as CSS from 'csstype';
import { Config, Length, Token } from '../types';
import { system } from '@styled-system/core';

export interface TypographyProps {
  fontFamily?: Token<CSS.Property.FontFamily>;
  fontSize?: Token<CSS.Property.FontSize<Length>>;
  fontStyle?: Token<CSS.Property.FontStyle>;
  fontWeight?: Token<string | number>;
  letterSpacing?: Token<CSS.Property.LetterSpacing<Length>>;
  lineHeight?: Token<CSS.Property.LineHeight<Length>>;
  textAlign?: Token<CSS.Property.TextAlign>;
  textDecoration?: Token<CSS.Property.TextDecoration>;
  textOverflow?: Token<CSS.Property.TextOverflow>;
  textTransform?: Token<CSS.Property.TextTransform>;
  whiteSpace?: Token<CSS.Property.WhiteSpace>;
  wordBreak?: Token<CSS.Property.WordBreak>;
}

const config: Config<TypographyProps> = {
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
