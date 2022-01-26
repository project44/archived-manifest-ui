import * as CSS from 'csstype';
import { Configs, ResponsiveValue } from '../types';
import { system } from '../core';

export interface ColorProps {
  color?: ResponsiveValue<CSS.Property.Color>;
  fill?: ResponsiveValue<CSS.Property.Color>;
  opacity?: ResponsiveValue<CSS.Property.Opacity>;
  stroke?: ResponsiveValue<CSS.Property.Color>;
  textColor?: ResponsiveValue<CSS.Property.Color>;
}

const config: Configs = {
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
