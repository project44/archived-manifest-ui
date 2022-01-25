import * as CSS from 'csstype';
import { Config, ResponsiveValue, system } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

export interface ColorProps<ThemeType extends Theme = RequiredTheme> {
  color?: ResponsiveValue<CSS.Property.Color, ThemeType>;
  fill?: ResponsiveValue<CSS.Property.Color, ThemeType>;
  opacity?: ResponsiveValue<CSS.Property.Opacity, ThemeType>;
  stroke?: ResponsiveValue<CSS.Property.Color, ThemeType>;
  textColor?: ResponsiveValue<CSS.Property.Color, ThemeType>;
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
