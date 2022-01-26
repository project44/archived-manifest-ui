import * as CSS from 'csstype';
import { Configs, ResponsiveValue } from '../types';
import { system } from '../core';

export interface ShadowProps {
  boxShadow?: ResponsiveValue<CSS.Property.BoxShadow | number>;
  textShadow?: ResponsiveValue<CSS.Property.TextShadow | number>;
}

const config: Configs = {
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows',
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows',
  },
};

export const shadow = system(config);
