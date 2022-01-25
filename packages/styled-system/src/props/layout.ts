import * as CSS from 'csstype';
import { Config, get, ResponsiveValue, Scale, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';
import isNumber from 'lodash.isnumber';

export interface LayoutProps<ThemeType extends Theme = RequiredTheme> {
  boxSize?: ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, ThemeType>;
  boxSizing?: ResponsiveValue<CSS.Property.BoxSizing, ThemeType>;

  width?: ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, ThemeType>;
  w?: ResponsiveValue<CSS.Property.Width<TLengthStyledSystem>, ThemeType>;

  height?: ResponsiveValue<CSS.Property.Height<TLengthStyledSystem>, ThemeType>;
  h?: ResponsiveValue<CSS.Property.Height<TLengthStyledSystem>, ThemeType>;

  minWidth?: ResponsiveValue<CSS.Property.MinWidth<TLengthStyledSystem>, ThemeType>;
  minW?: ResponsiveValue<CSS.Property.MinWidth<TLengthStyledSystem>, ThemeType>;

  maxWidth?: ResponsiveValue<CSS.Property.MaxWidth<TLengthStyledSystem>, ThemeType>;
  maxW?: ResponsiveValue<CSS.Property.MaxWidth<TLengthStyledSystem>, ThemeType>;

  minHeight?: ResponsiveValue<CSS.Property.MinHeight<TLengthStyledSystem>, ThemeType>;
  minH?: ResponsiveValue<CSS.Property.MinHeight<TLengthStyledSystem>, ThemeType>;

  maxHeight?: ResponsiveValue<CSS.Property.MaxHeight<TLengthStyledSystem>, ThemeType>;
  maxH?: ResponsiveValue<CSS.Property.MaxHeight<TLengthStyledSystem>, ThemeType>;

  display?: ResponsiveValue<CSS.Property.Display, ThemeType>;
  d?: ResponsiveValue<CSS.Property.Display, ThemeType>;

  verticalAlign?: ResponsiveValue<CSS.Property.VerticalAlign<TLengthStyledSystem>, ThemeType>;

  overflow?: ResponsiveValue<CSS.Property.Overflow, ThemeType>;
  overflowX?: ResponsiveValue<CSS.Property.OverflowX, ThemeType>;
  overflowY?: ResponsiveValue<CSS.Property.OverflowY, ThemeType>;
}

const getWidth = (n: number, scale?: Scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : `${n * 100}%`) as string | number;

const config: Config = {
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes',
  },
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
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
