import * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, SystemConfigs, Theme, ThemeValue } from '../types';
import { system } from '../core';

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

const config: SystemConfigs = {
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
