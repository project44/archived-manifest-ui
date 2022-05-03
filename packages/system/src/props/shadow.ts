import * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, SystemConfigs, Theme } from '../types';
import { system } from '../core';

export interface ShadowProps<ThemeType extends Theme = RequiredTheme> {
  boxShadow?: ResponsiveValue<CSS.Property.BoxShadow | (number & {}), ThemeType>;
  textShadow?: ResponsiveValue<CSS.Property.TextShadow | (number & {}), ThemeType>;
}

const config: SystemConfigs = {
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
