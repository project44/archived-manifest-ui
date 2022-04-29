import * as CSS from 'csstype';
import { Config, RequiredTheme, ResponsiveValue, system, Theme } from 'styled-system';

export interface TransitionProps<ThemeType extends Theme = RequiredTheme> {
  transition?: ResponsiveValue<CSS.Property.Transition, ThemeType>;
  transitionProperty?: ResponsiveValue<CSS.Property.TransitionProperty, ThemeType>;
  transitionDuration?: ResponsiveValue<CSS.Property.TransitionDuration, ThemeType>;
  transitionTimingFunction?: ResponsiveValue<CSS.Property.TransitionTimingFunction, ThemeType>;
  transitionDelay?: ResponsiveValue<CSS.Property.TransitionDelay, ThemeType>;
}

const config: Config = {
  transition: true,
  transitionDelay: true,
  transitionDuration: {
    property: 'transitionDuration',
    scale: 'transitions.duration',
  },
  transitionProperty: {
    property: 'transitionProperty',
    scale: 'transitions.property',
  },
  transitionTimingFunction: {
    property: 'transitionTimingFunction',
    scale: 'transitions.timingFunction',
  },
};

export const transition = system(config);
