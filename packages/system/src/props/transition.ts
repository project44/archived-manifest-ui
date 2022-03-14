import * as CSS from 'csstype';
import { Configs, ResponsiveValue } from '../types';
import { system } from '../core';

export interface TransitionProps {
  transition?: ResponsiveValue<CSS.Property.Transition>;
  transitionProperty?: ResponsiveValue<CSS.Property.TransitionProperty>;
  transitionDuration?: ResponsiveValue<CSS.Property.TransitionDuration>;
  transitionTimingFunction?: ResponsiveValue<CSS.Property.TransitionTimingFunction>;
  transitionDelay?: ResponsiveValue<CSS.Property.TransitionDelay>;
}

const config: Configs = {
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
