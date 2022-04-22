import * as CSS from 'csstype';
import { Config, Token } from '../types';
import { system } from '@styled-system/core';

export interface TransitionProps {
  transition?: Token<CSS.Property.Transition>;
  transitionProperty?: Token<CSS.Property.TransitionProperty>;
  transitionDuration?: Token<CSS.Property.TransitionDuration>;
  transitionTimingFunction?: Token<CSS.Property.TransitionTimingFunction>;
  transitionDelay?: Token<CSS.Property.TransitionDelay>;
}

const config: Config<TransitionProps> = {
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
