import * as CSS from 'csstype';
import { Config, ResponsiveValue, system, TLengthStyledSystem } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

export interface ShadowProps<ThemeType extends Theme = RequiredTheme> {
  boxShadow?: ResponsiveValue<CSS.Property.BoxShadow | (number & {}), ThemeType>;
  textShadow?: ResponsiveValue<CSS.Property.TextShadow | (number & {}), ThemeType>;
}

const config: Config = {
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
