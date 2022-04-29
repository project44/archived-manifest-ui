import * as CSS from 'csstype';
import { Config, RequiredTheme, ResponsiveValue, system, Theme, ThemeValue } from 'styled-system';

export interface ColorProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<'colors', ThemeType>,
> {
  color?: ResponsiveValue<TVal, ThemeType>;
  fill?: ResponsiveValue<TVal, ThemeType>;
  opacity?: ResponsiveValue<CSS.Property.Opacity, ThemeType>;
  stroke?: ResponsiveValue<TVal, ThemeType>;
  textColor?: ResponsiveValue<TVal, ThemeType>;
}

const config: Config = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  opacity: true,
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
};

config.textColor = config.color;

export const color = system(config);
