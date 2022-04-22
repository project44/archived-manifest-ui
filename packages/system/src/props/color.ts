import * as CSS from 'csstype';
import { Config, Token } from '../types';
import { system } from '@styled-system/core';

export interface ColorProps {
  color?: Token<CSS.Property.Color>;
  fill?: Token<CSS.Property.Color>;
  stroke?: Token<CSS.Property.Color>;
  textColor?: Token<CSS.Property.Color>;
}

const config: Config<ColorProps> = {
  color: {
    property: 'color',
    scale: 'colors',
  },
  fill: {
    property: 'fill',
    scale: 'colors',
  },
  stroke: {
    property: 'stroke',
    scale: 'colors',
  },
  textColor: {
    property: 'color',
    scale: 'colors',
  },
};

export const color = system(config);
