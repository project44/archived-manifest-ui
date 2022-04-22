import * as CSS from 'csstype';
import { Config, Token } from '../types';
import { system } from '@styled-system/core';

export interface ShadowProps {
  boxShadow?: Token<CSS.Property.BoxShadow | number>;
  textShadow?: Token<CSS.Property.TextShadow | number>;
}

const config: Config<ShadowProps> = {
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
