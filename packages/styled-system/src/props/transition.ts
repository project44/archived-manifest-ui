import * as CSS from 'csstype';
import { Config, ResponsiveValue, system } from 'styled-system';
import { RequiredTheme, Theme } from '../types';

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
  transitionProperty: {
    property: 'transitionProperty',
    scale: 'transitions.property',
  },
  transitionDuration: {
    property: 'transitionDuration',
    scale: 'transitions.duration',
  },
  transitionTimingFunction: {
    property: 'transitionTimingFunction',
    scale: 'transitions.timingFunction',
  },
};

export const transition = system(config);
