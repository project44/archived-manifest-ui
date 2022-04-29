import * as CSS from 'csstype';
import { Config, RequiredTheme, ResponsiveValue, system, Theme } from 'styled-system';

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
