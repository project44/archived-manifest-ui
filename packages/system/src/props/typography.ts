import * as CSS from 'csstype';
import {
  Config,
  RequiredTheme,
  ResponsiveValue,
  system,
  Theme,
  TLengthStyledSystem,
} from 'styled-system';

export interface TypographyProps<ThemeType extends Theme = RequiredTheme> {
  fontFamily?: ResponsiveValue<CSS.Property.FontFamily, ThemeType>;
  fontSize?: ResponsiveValue<CSS.Property.FontSize<TLengthStyledSystem>, ThemeType>;
  fontStyle?: ResponsiveValue<CSS.Property.FontStyle, ThemeType>;
  fontWeight?: ResponsiveValue<string | number, ThemeType>;
  letterSpacing?: ResponsiveValue<CSS.Property.LetterSpacing<TLengthStyledSystem>, ThemeType>;
  lineHeight?: ResponsiveValue<CSS.Property.LineHeight<TLengthStyledSystem>, ThemeType>;
  textAlign?: ResponsiveValue<CSS.Property.TextAlign, ThemeType>;
  textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType>;
  textOverflow?: ResponsiveValue<CSS.Property.TextOverflow, ThemeType>;
  textTransform?: ResponsiveValue<CSS.Property.TextTransform, ThemeType>;
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType>;
  wordBreak?: ResponsiveValue<CSS.Property.WordBreak, ThemeType>;
}

const config: Config = {
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
