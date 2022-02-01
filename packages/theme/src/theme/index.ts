import { borders } from './borders';
import { colors } from './colors';
import { elevation } from './elevation';
import { layout } from './layout';
import { responsive } from './responsive';
import { Theme } from '../types';
import { transitions } from './transitions';
import { typography } from './typography';

export const theme: Theme = {
  ...borders,
  ...colors,
  ...layout,
  ...elevation,
  ...responsive,
  ...transitions,
  ...typography,
};
